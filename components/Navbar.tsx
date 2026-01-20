"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Utensils } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-red-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-600/30">
            <Utensils size={22} className="text-white" />
          </div>
          <span
            className={`font-black text-xl lg:text-2xl tracking-tighter uppercase transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Blessing <span className={isScrolled ? "text-red-600" : "text-yellow-400"}>Store</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-xs lg:text-sm font-bold uppercase tracking-[0.15em] transition-colors ${
                  isScrolled 
                    ? "text-gray-600 hover:text-red-600" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-gray-300/30 pl-8">
            <Link 
                href="#kontak" 
                className={`px-6 py-2.5 rounded-full font-bold uppercase text-[10px] lg:text-xs tracking-widest transition-all shadow-md active:scale-95 ${
                    isScrolled 
                    ? "bg-red-600 text-white hover:bg-red-700" 
                    : "bg-white text-red-700 hover:bg-gray-100"
                }`}
            >
              Pesan Sekarang
            </Link>
            
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={isScrolled ? "text-red-900" : "text-white"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-red-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-red-600 font-bold uppercase text-sm tracking-[0.2em] border-b border-gray-100 pb-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Link 
                href="#kontak" 
                className="text-center bg-red-600 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-red-700 transition-colors"
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