/**
 * Forma ma'lumotini Telegram guruhiga yuboradi.
 * Lokal dev (npm run dev) va Netlify'dagi Next.js runtime'da ishlaydi.
 * netlify/functions/send-order.js bilan bir xil kontrakt: POST /api/send-order
 */

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

  let body: { name?: unknown; phone?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Noto'g'ri so'rov formati" },
      { status: 400 }
    );
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
