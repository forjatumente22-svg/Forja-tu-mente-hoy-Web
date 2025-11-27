import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, ShoppingBag, BookOpen, User, Flame } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Don't show navbar on Squeeze Page (Ebook Landing) to prevent leaks
  if (location.pathname === '/descarga-ebook') return null;

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Método Forja', path: '/metodo' },
    { name: 'Aula Digital', path: '/aula' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-[#ff4400] rounded-sm group-hover:bg-white transition-colors">
              <Hammer className="text-black w-6 h-6" />
            </div>
            <span className="font-black text-xl text-white tracking-tighter uppercase group-hover:text-[#ff4400] transition-colors">
              Forja Tu Mente
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#ff4400] ${
                  location.pathname === link.path ? 'text-[#ff4400]' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/aula"
              className="bg-[#111] border border-[#ff4400] text-[#ff4400] px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#ff4400] hover:text-black transition-all flex items-center gap-2"
            >
              <User size={14} /> Acceso Alumnos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#ff4400] transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-in slide-in-from-top-5">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold uppercase tracking-widest ${
                  location.pathname === link.path ? 'text-[#ff4400]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/aula"
              onClick={() => setIsOpen(false)}
              className="bg-[#ff4400] text-black py-4 text-center font-bold uppercase tracking-widest"
            >
              Acceso Alumnos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;