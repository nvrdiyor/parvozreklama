/**
 * Netlify Function: forma ma'lumotini Telegram guruhiga yuboradi.
 * Token va chat ID faqat serverda (environment variables) saqlanadi —
 * frontendga hech qachon chiqmaydi.
 *
 * Kerakli env o'zgaruvchilar (Netlify UI'da sozlanadi):
 *   TELEGRAM_BOT_TOKEN
 *   TELEGRAM_CHAT_ID
 */

function buildMessage({ name, phone, message }) {
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

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json(
      { ok: false, error: "Faqat POST so'rov qabul qilinadi" },
      { status: 405 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan");
    return Response.json(
      { ok: false, error: "Server sozlanmagan" },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Noto'g'ri so'rov formati" },
      { status: 400 }
    );
  }

  const name = String(body.name || "").trim().slice(0, 100);
  const phone = String(body.phone || "").trim().slice(0, 30);
  const message = String(body.message || "").trim().slice(0, 2000);

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
          text: buildMessage({ name, phone, message }),
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
};

// Funksiya /api/send-order manzilida ishlaydi (frontend shu manzilga POST qiladi)
export const config = { path: "/api/send-order" };
