import { getCollection } from 'astro:content';
import { pillars, priorityTerms } from '../data/knowledge-architecture';

export async function GET() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const articleLines = articles
    .sort((a, b) => a.data.title.localeCompare(b.data.title, 'id'))
    .map((article) => `- [${article.data.title}](https://stifinmulia.com/artikel/${article.id}/): ${article.data.keyAnswer}`)
    .join('\n');
  const pillarLines = pillars.map((pillar) => `- [${pillar.title}](https://stifinmulia.com/panduan/${pillar.slug}/): ${pillar.keyAnswer}`).join('\n');
  const termLines = priorityTerms.map((term) => `- [${term.term}](https://stifinmulia.com/istilah/${term.slug}/)`).join('\n');
  const body = `# STIFIn Mulia

> Situs edukasi dan layanan untuk mengenal STIFIn, mengikuti Tes STIFIn, melanjutkan WSL 1, serta mempelajari jalur promotor. Dikelola oleh Muhamad Sofyan AR dan berbasis layanan di Bandung dengan jaringan lintas wilayah.

## Halaman utama
- [Pilih Layanan](https://stifinmulia.com/pilih-layanan/): membandingkan Tes STIFIn individual, keluarga, kelompok, WSL 1, dan jalur promotor; menyediakan rekomendasi tiga pertanyaan serta permintaan jadwal terstruktur.
- [Langkah Berikutnya](https://stifinmulia.com/langkah-selanjutnya/): memilih jalur Tes STIFIn, WSL 1, atau promotor berdasarkan posisi dan kesiapan pengguna.
- [Temukan Langkah Saya](https://stifinmulia.com/perjalanan/): empat pertanyaan singkat yang menghasilkan jalur personal, bacaan pilihan, dan rekomendasi langkah berikutnya.
- [Apakah Tes STIFIn Cocok untuk Saya?](https://stifinmulia.com/apakah-tes-stifin-cocok-untuk-saya/): pusat keputusan untuk menilai kecocokan, memahami batas penggunaan, dan membedakan tes, penjelasan hasil, WSL 1, serta promotor.
- [Tes STIFIn](https://stifinmulia.com/tes-stifin/): proses, manfaat, hasil, dan langkah pendaftaran.
- [Cari layanan di kota Anda](https://stifinmulia.com/jaringan-promotor/): data wilayah dan promotor hasil sinkronisasi API.
- [WSL 1](https://stifinmulia.com/wsl-1/): pembelajaran dasar setelah mengenal hasil tes.
- [Menjadi promotor](https://stifinmulia.com/jadi-promotor/): peran, proses belajar, dan peluang aktivitas promotor.
- [Kamus istilah](https://stifinmulia.com/istilah-stifin/): definisi istilah STIFIn dan penerapannya.
- [Pusat Bukti](https://stifinmulia.com/bukti/): testimoni bernama, dokumentasi kegiatan, data jaringan, transparansi sumber, dan batas klaim.
- [Standar editorial](https://stifinmulia.com/standar-editorial/): sumber, peninjauan, pembaruan, penggunaan AI, dan koreksi.
- [Tentang STIFIn Mulia](https://stifinmulia.com/tentang/): pengelola, posisi jaringan, dan nilai layanan.

## Panduan utama
${pillarLines}

## Istilah prioritas
${termLines}

## Artikel
${articleLines}

## Catatan penggunaan
- Konten STIFIn di situs ini adalah bahan edukasi dan bukan diagnosis medis atau psikologis.
- Data wilayah berasal dari cabang yang berhasil tersinkron dan tidak boleh dianggap sebagai keseluruhan jaringan nasional.
- Nomor pribadi, email, PassID, saldo, dan data sensitif promotor tidak dipublikasikan.
- Konfirmasi jadwal, biaya, dan ketentuan terbaru dilakukan melalui WhatsApp pusat STIFIn Mulia.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
