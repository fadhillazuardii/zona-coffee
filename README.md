# ☕ Zona Coffe - Premium Coffee Shop Landing Page

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Zona Coffe** adalah proyek _landing page_ modern yang dirancang untuk menghadirkan pengalaman digital kedai kopi yang elegan. Dibangun dengan fokus pada kecepatan performa dan estetika visual yang halus menggunakan animasi interaktif.

🔗 **Live Demo:** [http://zona-coffee-r6dm.vercel.app/]

---

## ✨ Fitur Unggulan

- **Premium UI/UX:** Desain bersih dengan skema warna hangat yang mencerminkan suasana kopi.
- **Interactive Animations:** Menggunakan **Framer Motion** untuk transisi _fade-in_, _staggered list_, dan _smooth scroll_.
- **Fully Responsive:** Optimal di semua ukuran layar, mulai dari smartphone hingga monitor desktop.
- **Modern Navbar:** Navigasi yang responsif dengan efek transisi saat di-scroll.
- **Menu Showcase:** Katalog produk kopi yang tersusun rapi dengan kartu yang interaktif.

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) / [FontAwesome](https://fontawesome.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Cara Menjalankan Secara Lokal

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/fadhillazuardii/zona-coffe.git](https://github.com/fadhillazuardii/zona-coffe.git)
    ```
2.  **Masuk ke folder proyek:**
    ```bash
    cd zona-coffe
    ```
3.  **Instal semua dependensi:**
    ```bash
    npm install
    ```
4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
    _Aplikasi akan berjalan di `http://localhost:5173`._

---

## 🌐 Deployment ke Vercel

Proyek ini siap untuk di-deploy ke **Vercel** dengan langkah mudah:

1.  Buat akun di [Vercel](https://vercel.com/).
2.  Hubungkan akun GitHub Anda.
3.  Pilih repositori `zona-coffe`.
4.  Vercel akan secara otomatis mendeteksi framework (Vite/React).
5.  Klik **Deploy**.
6.  Setiap kali Anda melakukan `git push` ke branch `main`, Vercel akan memperbarui tampilan web Anda secara otomatis.

---

## 📂 Struktur Proyek

```text
├── public/              # Aset statis (Logo, Favicon)
├── src/
│   ├── components/      # Komponen UI (Navbar, Hero, Menu, Footer)
│   ├── assets/          # Gambar produk & latar belakang
│   ├── App.jsx          # Komponen utama
│   └── main.jsx         # Entry point aplikasi
├── tailwind.config.js   # Konfigurasi Tailwind CSS
└── package.json         # Informasi dependensi proyek

👤 Author
Fadhil Lazuardi

GitHub: @fadhillazuardii

LinkedIn: https://www.linkedin.com/in/fadhillazuardii/


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```
