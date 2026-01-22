"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Clock, Flame, ChefHat, ShoppingCart, Info, CheckCircle2 } from 'lucide-react';
import { staticProducts } from "@/lib/data";

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mencegah scroll pada body website utama saat modal terbuka
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProduct]);

  // Nomor WA Admin
  const NOMOR_WA = "6281234567890"; 

  const getWALink = (product) => {
    const text = `Halo Admin Blessing Store, saya mau pesan *${product.Name}*. Apakah ready stock?`;
    return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <section id="produk" className="py-24 bg-[#FDFBF7] scroll-mt-8 relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-red-100/50 rounded-full blur-3xl"></div>
            <div className="absolute top-[20%] -left-[10%] w-[300px] h-[300px] bg-yellow-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Daftar Menu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Frozen</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Stok kulkas aman, perut kenyang. Praktis, higienis, dan pedasnya nampol!
            </p>
          </div>

          {/* Grid Produk */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-2 transition-all duration-300 flex flex-col border border-slate-100 group"
              >
                {/* Gambar Card */}
                <div 
                  className="relative h-64 w-full overflow-hidden rounded-t-[2rem] bg-slate-100 cursor-pointer" 
                  onClick={() => setSelectedProduct(product)}
                >
                  <Image
                    src={product.Thumbnail}
                    alt={product.Name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/95 backdrop-blur-md text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-slate-100 flex items-center gap-1">
                        🔥 {product.VariantName}
                     </span>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-6 flex-1 flex flex-col relative">
                  <h3 
                    className="text-xl font-bold text-slate-900 mb-2 cursor-pointer group-hover:text-red-600 transition-colors"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.Name}
                  </h3>
                  
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {product.Description}
                  </p>

                  <div className="mt-auto flex items-end justify-between pt-4 border-t border-dashed border-slate-200">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Harga Spesial</p>
                      <p className="text-2xl font-black text-slate-800">
                        <span className="text-sm font-bold text-red-500 mr-1">Rp</span>
                        {Number(product.Price).toLocaleString("id-ID")}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-200 group-hover:scale-110 duration-300"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL DETAIL PRODUK (REDESIGNED) --- */}
      {selectedProduct && (
       <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedProduct(null)}
          ></div>

          {/* Modal Content */}
          <div 
      className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden max-h-[85vh] md:h-auto md:max-h-[90vh] animate-in zoom-in-95 duration-300 ease-out"
    >
            {/* Tombol Close (Floating) */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-50 bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-red-500 hover:text-white transition-all border border-white/20 shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* KIRI: Gambar (Sticky di Desktop) */}
            <div className="w-full md:w-[45%] bg-slate-100 relative h-[250px] md:h-auto md:min-h-[600px]">
              <Image
                src={selectedProduct.Thumbnail}
                alt={selectedProduct.Name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden"></div>
            </div>

            {/* KANAN: Scrollable Content */}
            <div className="w-full md:w-[55%] flex flex-col bg-white h-full max-h-[calc(95vh-250px)] md:max-h-[90vh]">
              
              {/* Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 pb-24 md:pb-10 custom-scrollbar">
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold border border-yellow-200">
                    ✨ {selectedProduct.VariantName}
                   </span>
                   <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                    📦 Frozen Pack
                   </span>
                </div>

                {/* Title & Price */}
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">
                  {selectedProduct.Name}
                </h3>
                <div className="flex items-baseline gap-2 mb-6 border-b border-slate-100 pb-6">
                   <span className="text-3xl font-bold text-red-600">
                     Rp {Number(selectedProduct.Price).toLocaleString("id-ID")}
                   </span>
                   <span className="text-slate-400 text-sm">/ pouch (±250gr)</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedProduct.Description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                     <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-xs font-bold text-orange-600 uppercase">Waktu Masak</span>
                     </div>
                     <p className="font-bold text-slate-800 text-lg">{selectedProduct.CookingTime || "5 Menit"}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
                     <div className="flex items-center gap-2 mb-2">
                        <Flame className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-bold text-red-600 uppercase">Kepedasan</span>
                     </div>
                     <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                           <div key={i} className={`h-2 w-full rounded-full ${i < (selectedProduct.Spiciness || 0) ? 'bg-red-500' : 'bg-red-200/50'}`} />
                        ))}
                     </div>
                     <p className="text-xs text-red-500 mt-2 font-medium text-right">Level {selectedProduct.Spiciness || 0}/5</p>
                  </div>
                </div>

                {/* Ingredients */}
                {selectedProduct.Ingredients && (
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Komposisi Premium</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.Ingredients.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 pl-2 pr-3 py-1.5 rounded-lg">
                           <CheckCircle2 className="w-3 h-3 text-green-500" />
                           <span className="text-xs font-medium text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Instructions */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-dashed border-slate-300">
                   <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <ChefHat className="w-5 h-5 text-slate-500" /> Cara Penyajian
                   </h4>
                   <p className="text-sm text-slate-600 italic leading-relaxed">
                      "{selectedProduct.Instructions || "Ikuti petunjuk yang tertera di kemasan belakang untuk hasil terbaik."}"
                   </p>
                </div>
              </div>

              {/* STICKY FOOTER ACTION (Penting untuk UX Mobile) */}
              <div className="p-4 md:p-6 border-t border-slate-100 bg-white md:bg-white/90 md:backdrop-blur-sm z-20">
                <a
                  href={getWALink(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                   <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                   <span>Pesan Sekarang</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSection;