# IEEEKOU-WebSite

Kocaeli Üniversitesi IEEE Öğrenci Kolu (IEEE KOÜ) resmi web sitesi. React + Vite + Tailwind CSS ile geliştirildi, içerik yönetimi Decap CMS üzerinden yapılır.

## Geliştirme

```bash
npm install
npm run dev
```

## İçerik Yönetimi (Admin Paneli)

Siteye `/admin` adresinden erişilir. Yerelde test etmek için `public/admin/config.yml` içine geçici olarak `local_backend: true` ekleyip ayrı bir terminalde şunu çalıştırın:

```bash
npm run cms
```

Canlı ortamda (Netlify) panel, Netlify Identity + Git Gateway üzerinden doğrudan çalışır.

## Build

```bash
npm run build
```
