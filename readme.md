# Dokumentasi Proyek Portofolio

Dokumentasi ini menjelaskan struktur, penggunaan framework (Bootstrap 5.3.3), serta penyesuaian gaya (_styling_) pada proyek portofolio web Dall.

---

## 1. Daftar Berkas (File Structure)

```text
Portfolio.github.io/
├── index.html        # Berkas utama HTML (Struktur & Konten)
├── style.css         # Kustomisasi gaya (Custom CSS & variabel warna)
├── DOKUMENTASI.md    # Dokumentasi proyek
└── assets/           # Direktori aset gambar portofolio & ilustrasi
    ├── about.jpg
    ├── f-removebg-preview.png
    ├── projek1.png
    ├── projek2.png
    ├── projek3.png
    ├── projek4.png
    └── Screenshot (13).png
```

---

## 2. Penggunaan Bootstrap 5.3.3 & CSS Kustom

Proyek ini memadukan **Bootstrap 5.3.3** (melalui CDN) dengan file `style.css` lokal agar tetap memiliki fleksibilitas tinggi tanpa elemen AI slop yang berlebihan (clean & modern UI):

- **Bootstrap Components yang Digunakan:**
  - **Navbar (`navbar navbar-expand-lg`):** Navigasi responsif dengan tombol _collapse_ otomatis untuk perangkat seluler.
  - **Grid System (`container`, `row`, `col-lg-*`):** Tata letak responsif untuk bagian hero, tentang, proyek, catatan, dan FAQ.
  - **Cards (`card`, `card-img-top`, `card-body`):** Menampilkan galeri proyek dan artikel catatan secara rapi dan seragam.
  - **Accordion (`accordion`, `accordion-item`, `accordion-button`):** Bagian Tanya Jawab (FAQ) interaktif.
- **Custom CSS (`style.css`):**
  - Mengatur palet warna dasar (_earthy & clean tone_).
  - Menyediakan _backdrop-filter blur_ pada bilah navigasi atas.
  - Memperhalus transisi dan bayangan halus (_subtle shadow_) pada kartu proyek saat kursor mendekat (_hover_).

---

## 3. Cara Menjalankan Proyek

1. Buka folder proyek di editor teks atau VS Code.
2. Gunakan ekstensi **Live Server** di VS Code untuk melakukan pratinjau (_preview_) secara langsung secara lokal.
3. Atau cukup buka berkas `index.html` langsung melalui browser web pilihan Anda.
