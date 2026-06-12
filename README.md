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

Forma yuborilganda buyurtma Telegram guruhiga tushadi. Ikkita bir xil endpoint bor:

- `app/api/send-order/route.ts` — Next.js route (lokal `npm run dev` va Netlify'da ishlaydi)
- `netlify/functions/send-order.js` — Netlify Function (`/api/send-order` yo'lida)

**Environment o'zgaruvchilar** (ikkalasi ham shart):

| Nomi | Qiymati |
|---|---|
| `TELEGRAM_BOT_TOKEN` | BotFather bergan bot token |
| `TELEGRAM_CHAT_ID` | Guruh chat ID (manfiy son) |

Lokalda: loyiha ildizida `.env.local` fayl yarating (git'ga kirmaydi):

```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

Netlify'da: **Site configuration → Environment variables** bo'limida xuddi shu ikki o'zgaruvchini qo'shing.

> Muhim: bot guruhga a'zo bo'lishi kerak, aks holda Telegram "chat not found" xatosini beradi.

## Netlify'ga deploy qilish

1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. GitHub'ni ulang va `nvrdiyor/parvozreklama` repo'sini tanlang
3. Build sozlamalari avtomatik aniqlanadi (`npm run build`, Next.js plugin `netlify.toml`da yozilgan)
4. **Environment variables** bosqichida `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID` ni kiriting
5. **Deploy** bosing — bir-ikki daqiqada sayt `*.netlify.app` manzilida ochiladi

Keyingi push'lar avtomatik deploy bo'ladi (CI/CD).

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
