# 🎬 Film & Dizi Takip Uygulaması

TNC Group / Software Persona staj programı kapsamında geliştirilen React tabanlı CRUD uygulaması.

## Özellikler

- Film ve dizi ekleme, listeleme, güncelleme, silme (CRUD)
- Durum takibi: İzlenecek / İzleniyor / İzlendi
- Yıldız puanlama sistemi (1-5)
- Başlık, tür ve durum bazlı filtreleme & arama
- Özet istatistik kartları
- LocalStorage ile veri kalıcılığı

## Kullanılan Teknolojiler

- [React 19](https://react.dev/) — UI kütüphanesi
- [Vite](https://vitejs.dev/) — geliştirme ortamı & build aracı
- [Tailwind CSS v3](https://tailwindcss.com/) — stil

## Kurulum

```bash
npm install
npm run dev
```

## Proje Yapısı

```
src/
├── Components/    # Yeniden kullanılabilir UI bileşenleri
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── MovieForm.jsx
│   ├── FilterBar.jsx
│   └── StarRating.jsx
├── Pages/         # Sayfa bileşenleri
│   └── HomePage.jsx
└── Interfaces/    # Veri modelleri ve sabitler
    └── movie.js
```
