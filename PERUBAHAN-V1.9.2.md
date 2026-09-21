# STIFIn Mulia v1.9.2 — Coolify Docker Hotfix

## Penyebab kegagalan v1.9.1

BuildKit mencoba mengambil frontend Dockerfile eksternal `docker/dockerfile:1.7` karena directive pada baris pertama Dockerfile. DNS deployment server gagal menjangkau `registry-1.docker.io`, sehingga proses berhenti sebelum image Node, kode website, atau sinkronisasi STIFIn dijalankan.

## Perbaikan

- Menghapus directive `# syntax=docker/dockerfile:1.7`.
- Mengganti build step berbasis secret mount menjadi `RUN npm run build`.
- Tidak mengubah `STIFIN_API_BASE` atau `STIFIN_BRANCH_CODES` di Coolify.
- Daftar cabang tetap harus disimpan sebagai Build Variable di Coolify, bukan diketik manual ke repository.

## Jika redeploy masih gagal

Jika log selanjutnya gagal saat mengambil `node:22-alpine` atau `nginx:1.27-alpine`, masalahnya masih berada pada DNS atau koneksi Docker Hub di server. Ulangi deploy setelah koneksi pulih atau perbaiki DNS host Docker/Coolify. Itu bukan error aplikasi.
