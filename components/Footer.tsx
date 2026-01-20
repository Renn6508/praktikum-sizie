import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Utensils } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2a0505] pt-16 pb-8 text-white border-t border-red-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* KOLOM 1: BRAND & SOSMED */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-red-600 p-1.5 rounded-lg shadow-lg shadow-red-900/50">
                <Utensils size={20} className="text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">
                Blessing <span className="text-yellow-500">Store</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Menghadirkan sensasi seblak pedas premium dengan rempah pilihan. 
              Pedasnya nendang, rasanya sultan!
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white text-gray-400 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: QUICK LINKS */}
          <div className="md:pl-12">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-red-500">Menu</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm uppercase tracking-widest">
              {['Home', 'Tentang Kami', 'Visi Misi', 'Produk', 'Kontak'].map((item) => (
                <li key={item}>
                    <Link 
                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                        className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                        {item}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: CONTACT INFO */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-red-500">Hubungi Kami</h4>
            <ul className="flex flex-col gap-5 text-gray-300 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                    <MapPin className="text-yellow-500 group-hover:text-white shrink-0 transition-colors" size={18} />
                </div>
                <span className="mt-1">Jl. Sultan Agung No. 1, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Phone className="text-yellow-500 group-hover:text-white shrink-0 transition-colors" size={18} />
                </div>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Mail className="text-yellow-500 group-hover:text-white shrink-0 transition-colors" size={18} />
                </div>
                <span>order@seblaksultan.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BORDER */}
        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
            Copyright © 2026 <span className="text-gray-400 font-bold">Blessing Store</span>
          </p>
          <p className="text-[10px] text-gray-700">Developed by Leoren</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;