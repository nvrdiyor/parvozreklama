/**
 * Buyurtma formasini Telegram guruhiga yuboradi.
 * Next.js route handler — Vercel'da avtomatik Serverless Function bo'ladi.
 *
 * Env o'zgaruvchilar (Vercel: Settings → Environment Variables):
 *   TELEGRAM_BOT_TOKEN
 *   TELEGRAM_CHAT_ID
 *
 * Spam-himoya:
 *   - honeypot maydon ("website" — odam ko'rmaydi, bot to'ldiradi)
 *   - telefon raqami format tekshiruvi
 *   - bir IP'dan 30 soniyada 1 ta so'rov (warm instance doirasida)
 *   - maydon uzunliklari cheklangan
 */

const RATE_WINDOW_MS = 30_000;
const lastHit = new Map<string, number>();

function getIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function buildMessage(name: string, phone: string, message: string) {
  const currentDate = new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Asia/Tashkent",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  return [
    "📥 Yangi buyurtma",
    "",
    `👤 Ism: ${name}`,
    `📞 Telefon: ${phone}`,
    "",
    "📝 Buyurtma:",
    message || "—",
    "",
    `🕒 Sana: ${currentDate}`,
  ].join("\n");
}

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan");
    return Response.json(
      { ok: false, error: "Server sozlanmagan" },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Noto'g'ri so'rov formati" },
      { status: 400 }
    );
  }

  // Honeypot: bu maydonni faqat botlar to'ldiradi — jimgina "muvaffaqiyat" qaytaramiz
  if (String(body.website ?? "").trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const phone = String(body.phone ?? "").trim().slice(0, 30);
  const message = String(body.message ?? "").trim().slice(0, 2000);

  if (!name || !phone) {
    return Response.json(
      { ok: false, error: "Ism va telefon raqami majburiy" },
      { status: 400 }
    );
  }

  const phoneDigits = phone.replace(/[\s\-().]/g, "");
  if (!/^\+?\d{7,15}$/.test(phoneDigits)) {
    return Response.json(
      { ok: false, error: "Telefon raqami noto'g'ri kiritildi" },
      { status: 400 }
    );
  }

  // Oddiy rate limit: bir IP'dan 30 soniyada bittadan ko'p so'rov o'tkazmaymiz
  const ip = getIp(req);
  const now = Date.now();
  const prev = lastHit.get(ip);
  if (prev && now - prev < RATE_WINDOW_MS) {
    return Response.json(
      { ok: false, error: "Juda tez yuborildi — biroz kutib qayta urining" },
      { status: 429 }
    );
  }
  lastHit.set(ip, now);
  if (lastHit.size > 1000) {
    for (const [k, v] of lastHit) {
      if (now - v > RATE_WINDOW_MS) lastHit.delete(k);
    }
  }

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildMessage(name, phone, message),
        }),
      }
    );
    const data = await tgRes.json();

    if (!data.ok) {
      console.error("Telegram API xatosi:", data);
      return Response.json(
        { ok: false, error: "Telegramga yuborib bo'lmadi" },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Tarmoq xatosi:", err);
    return Response.json(
      { ok: false, error: "Tarmoq xatosi, qayta urinib ko'ring" },
      { status: 502 }
    );
  }
}
