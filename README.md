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

## Hali qilinishi mumkin bo'lgan ishlar

- **Statistika** — `components/Hero.tsx` ichidagi `STATS` (tajriba yillari, mijozlar soni va h.k.) taxminiy raqamlar
- **Aloqa formasi** — hozir faqat "rahmat" xabarini ko'rsatadi (`components/Contact.tsx`). Haqiqiy yuborish uchun Telegram bot API yoki email xizmatiga ulash kerak.
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
