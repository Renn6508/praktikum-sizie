"use client";
import Image from 'next/image';
import { staticProducts } from '@/lib/data';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';


const NOMOR_WA = "6281234567890";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-sans text-gray-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen bg-white overflow-hidden flex flex-col font-sans">
      
      <div className="absolute top-0 right-0 w-[45%] h-full bg-red-800 rounded-bl-[150px] z-0 hidden lg:block shadow-2xl" />

      {/* 3. Kontainer Utama Grid */}
      <div className="container mx-auto px-6 flex-grow flex items-center z-10 relative mt-8 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* --- KOLOM KIRI (TEKS) --- */}
          <div className="max-w-xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-sm font-bold tracking-wider mb-4 border border-red-200">
              🔥 PEDASNYA BIKIN NAGIH
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Seblak Frozen <br />
              <span className="text-red-800">Kualitas Sultan!</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Nikmati sensasi kuah kencur yang otentik dan pedas nampol. 
              Praktis, higienis, dan siap menemani waktu santai Anda di rumah.
            </p>

            {/* Tombol Action */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link 
                href="#produk" 
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-200 transition-all hover:scale-105 hover:shadow-red-400"
              >
                Lihat Menu
              </Link>
              <Link 
                href="#tentang-kami" 
                className="px-8 py-4 rounded-full font-bold text-slate-600 border-2 border-slate-200 hover:border-red-600 hover:text-red-600 transition-all bg-white"
              >
                Tentang Kami
              </Link>
            </div>

            {/* Info Cards (Fitur Unggulan) */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Card 1 */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                  {/* Icon Petir/Cepat */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Dikirim Cepat</h4>
                  <p className="text-xs text-slate-400">Dalam 30 Menit</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                   {/* Icon Api/Pedas */}
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Pedas Nampol</h4>
                  <p className="text-xs text-slate-400">Level Bisa Diatur</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- KOLOM KANAN (GAMBAR) --- */}
          <div className="relative h-[400px] lg:h-[650px] w-full flex items-center justify-center">
             
             {/* Gambar Utama (Bowl) - Pastikan PNG Transparan */}
             <div className="relative w-[320px] h-[320px] lg:w-[550px] lg:h-[550px] z-20">
               <Image
                 src="/images/seblak-bowl.png" // Ganti path sesuai gambar Anda
                 alt="Seblak Sultan Bowl"
                 fill
                 className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition duration-500 ease-in-out"
                 priority
               />
             </div>

             {/* Dekorasi Floating (Cabe) */}
             <div className="absolute top-20 right-10 w-20 h-20 animate-bounce z-30 hidden lg:block opacity-90">
                <Image src="/images/chili-floating.png" alt="cabe" width={80} height={80} className="object-contain rotate-12" />
             </div>
             
             {/* Dekorasi Floating (Kerupuk/Bumbu) */}
             <div className="absolute bottom-24 left-0 w-16 h-16 animate-pulse z-30 hidden lg:block opacity-90">
                <Image src="/images/spice-leaf.png" alt="daun" width={60} height={60} className="object-contain -rotate-45" />
             </div>

          </div>

        </div>
      </div>
    </section>

      {/* --- TENTANG KAMI & KOMPOSISI --- */}
      <section id="tentang-kami" className="py-18 bg-white scroll-mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Foto Persegi */}
            {/* <div className="w-full md:w-1/2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200"> */}
            <div className="w-full h-64 md:w-[400px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
               {/* Ganti dengan foto kemasan Standing Pouch */}
              <Image 
                src="/images/logo.png" 
                alt="Kemasan Standing Pouch Seblak Sultan" 
                fill 
                className="object-cover hover:scale-110 transition duration-500 "
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
      <section id="produk" className="py-18 bg-gradient-to-b from-gray-50 to-gray-100 scroll-mt-8">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Daftar Menu <span className="text-red-600">Frozen</span></h2>
            <p className="text-gray-600">Klik pesan untuk order langsung via WhatsApp!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staticProducts.map((product) => {
              
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
      <section id="visi-misi" className="py-18 bg-white scroll-mt-12">
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
      <section id="kontak" className="py-18 bg-red-800 text-white relative overflow-hidden">
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