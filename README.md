# Parvoz Reklama — sayt

Parvoz Reklama agentligi uchun Next.js'da qurilgan landing sahifa: bannerlar, vizitkalar, bosma ishlar, keng formatli pechat va grafik dizayn xizmatlari.

## Ishga tushirish

```bash
npm install
npm run dev
```

Sayt: [http://localhost:3000](http://localhost:3000)

Production build:

```bash
npm run build
npm start
```

## Aloqa ma'lumotlari

- **Telefon**: +998 70 057 40 00
- **Telegram**: [@parvozreklamamarkazi](https://t.me/parvozreklamamarkazi)
- **Manzil**: Xorazm, Urganch sh., Mirzo Ulug'bek ko'chasi, 54
- **Ish vaqti**: Du–Sha, 9:00–18:00

Bular `components/Header.tsx`, `CtaBand.tsx`, `Contact.tsx`, `Footer.tsx` fayllarida yozilgan.

## Aloqa formasi → Telegram

Forma yuborilganda buyurtma Telegram guruhiga tushadi.

- Endpoint: `app/api/send-order/route.ts` — Next.js route handler. Vercel'da bu **avtomatik Serverless Function** bo'ladi, alohida `api/` papka kerak emas.
- Spam-himoya: honeypot maydon, telefon format tekshiruvi, IP bo'yicha rate limit (30 soniyada 1 so'rov), maydon uzunligi cheklovlari.

**Environment o'zgaruvchilar:**

| Nomi | Qiymati |
|---|---|
| `TELEGRAM_BOT_TOKEN` | BotFather bergan bot token |
| `TELEGRAM_CHAT_ID` | Guruh chat ID (manfiy son) |

Lokalda: loyiha ildizida `.env.local` fayl yarating (git'ga kirmaydi):

```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

> Muhim: bot guruhga a'zo bo'lishi kerak, aks holda Telegram "chat not found" xatosini beradi.

## Vercel'ga deploy qilish

1. [vercel.com](https://vercel.com) → **Add New → Project** → GitHub'ni ulang → `nvrdiyor/parvozreklama` repo'sini **Import** qiling
2. Framework: **Next.js** (avtomatik aniqlanadi, hech narsa o'zgartirmang)
3. **Environment Variables** bo'limini ochib qo'shing (Production + Preview uchun):
   - `TELEGRAM_BOT_TOKEN` = bot tokeningiz
   - `TELEGRAM_CHAT_ID` = `-5128635263`
4. **Deploy** bosing — 1-2 daqiqada sayt `parvozreklama.vercel.app` kabi manzilda ochiladi
5. Keyingi har bir `git push origin main` avtomatik qayta deploy qiladi

Env o'zgaruvchini keyin o'zgartirsangiz: **Settings → Environment Variables** → yangilang → **Deployments → Redeploy** qiling.

## Hali qilinishi mumkin bo'lgan ishlar

- **Statistika** — `components/Hero.tsx` ichidagi `STATS` (tajriba yillari, mijozlar soni va h.k.) taxminiy raqamlar
- **Portfolio** — ishlar suratlari bilan galereya bo'limi qo'shish mumkin.

## Tuzilma

- `app/` — sahifa, layout, global uslublar, favicon
- `components/` — Header, Hero, Services, WhyUs, Process, CtaBand, Contact, Footer
- `components/Logo.tsx` — SVG logo (lochin belgisi + REKLAMA PARVOZ yozuvi), `dark` prop bilan qora fonda oq variant

## Texnologiyalar

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS 4
- TypeScript
- Montserrat shrifti (next/font orqali)

Brend ranglari `app/globals.css` da: qizil `#e5232b`, qora `#141414`.
