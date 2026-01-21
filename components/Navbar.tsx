"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Utensils } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ubah state saat scroll lebih dari 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Visi Misi", href: "#visi-misi" },
    { name: "Produk", href: "#produk" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" // Saat Scrolled: Putih agak transparan + Shadow
          : "bg-transparent py-5" // Saat di Atas: Transparan penuh (agar menyatu dengan bg putih hero)
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-red-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-600/30">
            <Utensils size={22} className="text-white" />
          </div>
          <span className="font-black text-xl lg:text-2xl tracking-tighter uppercase text-slate-900">
            Blessing <span className="text-red-600">Store</span>
          </span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-xs lg:text-sm font-bold uppercase tracking-[0.15em] transition-colors text-slate-500 hover:text-red-600"
              >
                {link.name}
                {/* Garis bawah animasi saat hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Tombol Kanan Desktop */}
          <div className="flex items-center gap-3 border-l border-gray-200 pl-8">
            <Link
              href="#kontak"
              className={`px-6 py-2.5 rounded-full font-bold uppercase text-[10px] lg:text-xs tracking-widest transition-all border-2 ${
                isScrolled
                  ? "bg-red-600 border-red-600 text-white hover:bg-red-700"
                  : "bg-transparent border-white text-white hover:bg-white/30 hover:text-white"
              }`}
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors text-slate-800 hover:bg-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-red-600 font-bold uppercase text-sm tracking-[0.2em] border-b border-gray-100 pb-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="#kontak"
              className="block w-full text-center bg-red-600 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-red-700 transition-transform active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;