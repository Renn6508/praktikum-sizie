"use client";
import Image from "next/image";
import { staticProducts } from "@/lib/data";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import { Flame, ArrowRight, Star, PlayCircle, MessageSquare,ShoppingBag } from "lucide-react";
import ProductSection from "@/components/screens/PeoductSection";

const NOMOR_WA = "6281234567890";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-sans text-gray-800">
      <Navbar />

      <section className="relative min-h-screen bg-[#FDFBF7] overflow-hidden flex items-center font-sans selection:bg-red-200">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#cc0000 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              {/* Badge Premium */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-100 shadow-sm mb-6 animate-fade-in-up">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold text-red-600 tracking-wide uppercase">
                  Best Seller Seblak #1
                </span>
              </div>

              {/* Headline Besar */}
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Seblak Frozen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                  Rasa Sultan.
                </span>
              </h1>

              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                Kuah kencur otentik dengan rempah pilihan. Pedasnya nampol,
                bikin nagih, dan siap saji dalam 5 menit.
              </p>

              {/* Tombol Action */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                {/* Tombol Pesan Sekarang - Menggunakan MessageSquare atau tetap ArrowRight */}
                <Link
                  href="#kontak"
                  className="group relative px-8 py-4 bg-red-600 rounded-full text-white font-bold text-lg shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-1 transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Pesan Sekarang{" "}
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                {/* Tombol Lihat Produk - Mengganti PlayCircle dengan ShoppingBag */}
                <Link
                  href="/produk"
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Lihat Produk
                </Link>
              </div>
            </div>
            {/* --- KOLOM KANAN (Visual Utama) --- */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-12 lg:mt-0 perspective-1000">
              <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] border-[2px] border-dashed border-red-300/50 rounded-full animate-[spin_20s_linear_infinite] z-0" />
              <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-red-200/40 to-orange-100/40 rounded-full blur-2xl z-0" />

              {/* 2. GAMBAR UTAMA (Mangkok) */}
              <div className="relative w-[300px] h-[300px] lg:w-[520px] lg:h-[520px] z-20 animate-float-slow group">
                {/* Gambar Seblak (URL Internet) */}
                <Image
                  src="/images/seblak2.png"
                  alt="Seblak Sultan Bowl"
                  fill
                  className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-105 hover:-rotate-2"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Label Floating "Pedas" */}
                <div className="absolute top-4 -right-2 lg:top-10 lg:-right-6 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce-slow z-30 transform hover:scale-110 transition-all cursor-default">
                  <div className="bg-red-50 p-2.5 rounded-full text-red-600 shadow-inner">
                    <Flame className="w-5 h-5 lg:w-6 lg:h-6 fill-red-600 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Level Pedas
                    </p>
                    <p className="text-sm lg:text-base text-slate-900 font-black leading-tight">
                      Malaikat Maut 🌶️
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. ELEMEN MELAYANG (Floating Ingredients) */}

              {/* Cabe (Kiri Atas) */}
              <div className="absolute -top-4 left-4 lg:top-0 lg:left-10 w-16 h-16 lg:w-24 lg:h-24 z-30 animate-float-delayed drop-shadow-xl">
                <Image
                  src="/images/cabe.png"
                  alt="cabe rawit"
                  fill
                  className="object-contain rotate-[15deg] blur-[0.5px] opacity-90"
                />
              </div>

              {/* Kerupuk (Kanan Bawah) */}
              <div className="absolute bottom-10 right-4 lg:bottom-12 lg:right-8 w-20 h-20 lg:w-28 lg:h-28 z-30 animate-float drop-shadow-xl">
                <Image
                  src="/images/kerupuk.png"
                  alt="kerupuk seblak"
                  fill
                  className="object-contain -rotate-[25deg] opacity-90"
                />
              </div>

              {/* Jeruk Limau (Kiri Bawah) */}
              <div className="absolute -bottom-6 left-10 lg:bottom-4 lg:left-10 w-12 h-12 lg:w-20 lg:h-20 z-10 animate-float-reverse drop-shadow-lg">
                <Image
                  src="/images/lime.png"
                  alt="jeruk limau"
                  fill
                  className="object-contain rotate-[45deg] blur-[1px] opacity-80"
                />
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
              <h2 className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">
                Profil Usaha
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                Kuliner Rumahan <br />
                Cita Rasa Sultan
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                <strong>Seblak Pedas Sultan</strong> merupakan usaha kuliner
                rumahan yang memproduksi seblak frozen dalam kemasan{" "}
                <em>standing pouch</em>. Produk ini dibuat untuk memudahkan
                konsumen menikmati seblak kapan saja di rumah dengan cara
                memasak yang praktis. Kami mengutamakan kebersihan, kualitas
                bahan, dan tentu saja rasa pedas yang khas.
              </p>

              {/* Komposisi Grid */}
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  🍲 Komposisi Premium:
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    ✅ Kerupuk Pilihan
                  </span>
                  <span className="flex items-center gap-2">✅ Makaroni</span>
                  <span className="flex items-center gap-2">
                    ✅ Sosis & Bakso
                  </span>
                  <span className="flex items-center gap-2">✅ Bumbu Khas</span>
                  <span className="flex items-center gap-2">
                    ✅ Garam & Gula
                  </span>
                  <span className="flex items-center gap-2">
                    ✅ Minyak Nabati
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUK --- */}
      <ProductSection />

      {/* --- VISI MISI --- */}
      <section id="visi-misi" className="py-18 bg-white scroll-mt-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Visi */}
            <div className="bg-red-50 p-10 rounded-3xl border border-red-100 h-full">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Visi Kami
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                "Menjadi usaha seblak pedas yang digemari oleh semua kalangan
                dengan cita rasa khas, kualitas terbaik, dan harga terjangkau."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-yellow-50 p-10 rounded-3xl border border-yellow-100 h-full">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                Misi Kami
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-600">1.</span>
                  <span>
                    Menyajikan seblak pedas dengan bahan berkualitas dan
                    higienis.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-600">2.</span>
                  <span>
                    Menghadirkan berbagai tingkat kepedasan sesuai selera
                    pelanggan.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-600">3.</span>
                  <span>
                    Memberikan pelayanan yang ramah dan cepat kepada konsumen.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-600">4.</span>
                  <span>
                    Menjaga cita rasa khas “Seblak Pedas Sultan” agar selalu
                    konsisten.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-600">5.</span>
                  <span>
                    Mengembangkan usaha secara kreatif dan inovatif agar mampu
                    bersaing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- KONTAK FINAL --- */}
      <section
        id="kontak"
        className="py-18 bg-red-800 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Mau Jadi Reseller?
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
            Atau mau stok di kulkas buat cemilan tengah malam? Yuk pesan
            sekarang, pengiriman aman dan cepat!
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
