"use client";
import Image from 'next/image';
import { staticProducts } from '@/lib/data';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

// 1. TENTUKAN NOMOR WA DISINI (Format: 628xxx, tanpa + atau 0 di depan)
const NOMOR_WA = "6281234567890";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-sans text-gray-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center text-white z-20 overflow-visible">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/background-hero.jpg"
            alt="Hero Seblak Sultan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 z-10 relative mt-16 md:mt-0">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-yellow-400 font-bold tracking-widest uppercase mb-2 block text-sm md:text-base">
              Praktis • Higienis • Pedas Nampol
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Seblak Frozen <br />
              <span className="text-red-500">Kualitas Sultan!</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Solusi nikmat makan seblak di rumah tanpa ribet. Tinggal masak, rasakan pedasnya yang bikin nagih!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#produk" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-900/50 hover:scale-105 text-center"
              >
                Lihat Menu
              </Link>
              <Link 
                href="#tentang-kami" 
                className="group flex items-center justify-center gap-2 border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-900 uppercase tracking-wider transition-all text-center"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TENTANG KAMI & KOMPOSISI --- */}
      <section id="tentang-kami" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Foto Persegi */}
            <div className="w-full md:w-1/2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200">
               {/* Ganti dengan foto kemasan Standing Pouch */}
              <Image 
                src="/images/logo.png" 
                alt="Kemasan Standing Pouch Seblak Sultan" 
                fill 
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Teks Deskripsi */}
            <div className="w-full md:w-1/2">
              <h2 className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Profil Usaha</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                Kuliner Rumahan <br />Cita Rasa Sultan
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                <strong>Seblak Pedas Sultan</strong> merupakan usaha kuliner rumahan yang memproduksi seblak frozen dalam kemasan <em>standing pouch</em>. Produk ini dibuat untuk memudahkan konsumen menikmati seblak kapan saja di rumah dengan cara memasak yang praktis. Kami mengutamakan kebersihan, kualitas bahan, dan tentu saja rasa pedas yang khas.
              </p>

              {/* Komposisi Grid */}
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  🍲 Komposisi Premium:
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700 font-medium">
                  <span className="flex items-center gap-2">✅ Kerupuk Pilihan</span>
                  <span className="flex items-center gap-2">✅ Makaroni</span>
                  <span className="flex items-center gap-2">✅ Sosis & Bakso</span>
                  <span className="flex items-center gap-2">✅ Bumbu Khas</span>
                  <span className="flex items-center gap-2">✅ Garam & Gula</span>
                  <span className="flex items-center gap-2">✅ Minyak Nabati</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUK --- */}
      <section id="produk" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Daftar Menu <span className="text-red-600">Frozen</span></h2>
            <p className="text-gray-600">Klik pesan untuk order langsung via WhatsApp!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staticProducts.map((product) => {
              
              // 2. LOGIKA PEMBUATAN PESAN OTOMATIS
              // Hasil: "Halo kak, saya mau pesan Seblak Frozen Original. Masih ready?"
              const pesan = `Halo Admin Blessing Store, saya mau pesan *${product.Name}*. Apakah masih ready?`;
              
              // 3. GENERATE LINK WA
              const linkWA = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;

              return (
                <div key={product.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col">
                  {/* Gambar */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                    <Image 
                      src={product.Thumbnail} 
                      alt={product.Name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {product.VariantName}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.Name}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{product.Description}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400">Harga / Pouch</p>
                        <p className="text-xl font-bold text-red-600">Rp {Number(product.Price).toLocaleString('id-ID')}</p>
                      </div>
                      
                      {/* 4. TOMBOL LINK KE WA */}
                      <a 
                        href={linkWA} // Panggil variabel linkWA disini
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg flex items-center gap-2"
                      >
                        {/* Ikon WA Kecil */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                        </svg>
                        Pesan WA
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- VISI MISI --- */}
      <section id="visi-misi" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Visi */}
              <div className="bg-red-50 p-10 rounded-3xl border border-red-100 h-full">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">Visi Kami</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  "Menjadi usaha seblak pedas yang digemari oleh semua kalangan dengan cita rasa khas, kualitas terbaik, dan harga terjangkau."
                </p>
              </div>

              {/* Misi */}
              <div className="bg-yellow-50 p-10 rounded-3xl border border-yellow-100 h-full">
                 <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-700 mb-4">Misi Kami</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">1.</span>
                    <span>Menyajikan seblak pedas dengan bahan berkualitas dan higienis.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">2.</span>
                    <span>Menghadirkan berbagai tingkat kepedasan sesuai selera pelanggan.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">3.</span>
                    <span>Memberikan pelayanan yang ramah dan cepat kepada konsumen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">4.</span>
                    <span>Menjaga cita rasa khas “Seblak Pedas Sultan” agar selalu konsisten.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">5.</span>
                    <span>Mengembangkan usaha secara kreatif dan inovatif agar mampu bersaing.</span>
                  </li>
                </ul>
              </div>

           </div>
        </div>
      </section>

      {/* --- KONTAK FINAL --- */}
      <section id="kontak" className="py-24 bg-red-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Mau Jadi Reseller?</h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
            Atau mau stok di kulkas buat cemilan tengah malam? Yuk pesan sekarang, pengiriman aman dan cepat!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
               href="https://wa.me/62812345678" // Ganti No WA
               target="_blank"
               className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition shadow-lg hover:-translate-y-1"
            >
               <span>Hubungi WhatsApp</span>
            </a>
            <a 
               href="https://seblakpedassultan.store.link" 
               target="_blank"
               className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:-translate-y-1"
            >
               Order via Store.link
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}