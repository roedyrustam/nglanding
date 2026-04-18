# Pandu Talenta Digital 🚀

Pusat pelatihan talenta digital futuristik. **Pandu Talenta Digital** adalah proyek landing page "Hub Talenta Digital" yang dibangun menggunakan standar desain masa depan (**2026 Cyber-Luxe Aesthetic**) dan performa web tingkat tinggi.

![Tema Cyber-Luxe](https://img.shields.io/badge/Theme-Cyber--Luxe-deepblue?style=for-the-badge&logo=css3&logoColor=cyan)
![Angular](https://img.shields.io/badge/Angular-21.2.7-dd0031?style=for-the-badge&logo=angular&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Web Audio API](https://img.shields.io/badge/Audio-Web_Audio_API-8a2be2?style=for-the-badge)

## ✨ Fitur Unggulan

Proyek ini telah dimodernisasi dari desain korporat standar menjadi portal digital yang sangat imersif:

### 1. Desain Cyber-Luxe 2026
- **Deep Space Mode**: Menggunakan palet sistem HSL dengan background hitam pekat (`--bg-deep`) dan aksen warna *Neon Cyan* serta *Electric Violet*.
- **Glassmorphism 2.0**: Penggunaan komponen transparan (Glass) dengan lapisan *blur* dan efek border cahaya tanpa mengorbankan keterbacaan (Accessibility).

### 2. Imersi & Interaktivitas Tingkat Tinggi
- **3D Digital Human**: Section Hero tidak lagi menggunakan gambar 2D, melainkan telah diintegrasikan dengan kanvas eksklusif **Three.js** yang menampilkan model siluet manusia digital interaktif dan responsif terhadap *movement* mouse.
- **Micro-Interaction UI Sounds**: Feedback pengguna secara *real-time* lewat sintesis suara organik **(Web Audio API)** saat melakukan Hover atau Click pada elemen penting.
- **Magnetic Buttons & Cyber Glow**: Sistem navigasi dan CTA menarik kursor pengguna (Magnetic effect) serta beresonansi (*glow expansion*) untuk memberikan pengalaman *tactile*.
- **Cinematic Scroll Reveal**: Munculnya elemen UI dikoordinasikan secara sinematik menggunakan *IntersectionObserver* performa tinggi (tanpa lagging).

### 3. Eksekusi Performa Web
- **SSR (Server-Side Rendering) Ready**: Semua *directives* lanjutan (termasuk 3D dan Audio) dibungkus menggunakan Angular *Platform Guards*. Ini menjamin optimasi SEO yang sempurna karena merender kode di server dengan lancar.
- **Standalone Components & Signals**: Arsitektur baru Angular digunakan untuk alur data modern tanpa zone.js berlebih.

## 🛠️ Tech Stack Utama

- **Framework**: Angular 21 (Standalone, Signals, dan SSR).
- **Styling**: Vanilla CSS (CSS Variables untuk Design System skala enterprise).
- **3D Rendering**: Three.js (WebGL rendering).
- **Audio API**: Web Audio API murni berbasis gelombang (Sine/Triangle).

## 💻 Cara Menjalankan secara Lokal

### Persyaratan
Pastikan kamu memiliki **Node.js** (rekomendasi: versi 20.x ke atas) dan **npm** terinstal di perangkatmu.

### Langkah Instalasi
1. Clone repositori ini atau navigasikan terminal ke direktori proyek utama.
2. Instal semua *dependencies*, termasuk package Three.js yang digunakan di hero.
   ```bash
   npm install
   ```

### Mode Pengembangan (Development)
Untuk langsung melihat hasilnya dan melakukan perubahan kode (hot-reload):
```bash
npm run dev
# atau
ng serve
```
Buka browser dan arahkan ke alamat `http://localhost:4200/`.

### Mode Server-Side Rendering (Production/SEO)
Proyek ini mendukung SSR. Untuk menguji versi SSR:
```bash
npm run build
npm run serve:ssr:pandu-talenta
```

---
*Didesain dan dikembangkan sebagai bagian dari inisiatif untuk memberdayakan Generasi Talenta Digital masa depan di Indonesia.*
