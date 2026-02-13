# Sparrow Advertising – Event Organizer

Website template for **Sparrow Advertising** event organizer, based on the company presentation (Jan 2026). Built with **React**, **Vite**, and **Tailwind CSS**.

## Sections

- **Hero** – Intro and tagline  
- **Legalitas Perusahaan** – PKP, Pajak, Akte Pendirian, SKT KUMHAM  
- **Tentang Kami** – About us  
- **Misi Kami** – Mission  
- **Cakupan Layanan** – Service scope  
- **Servis Kami** – Konsep, Produksi, Operasional  
- **Dokumentasi Acara** – Card carousel (prev/next, dots, swipe, autoplay)  
- **Informasi Kontak** – Phone, email, address  
- **Footer** – Closing line and branding  

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Customize dokumentasi carousel

Edit `src/components/DocCarousel.jsx`: update the `docItems` array with real event titles and, if you like, image URLs (e.g. use `<img>` in the card instead of the gradient placeholder).
