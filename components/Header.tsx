'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-dark/30 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Agarra Tu Gringa Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Inicio</Link>
          <Link href="/nosotros" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Nosotros</Link>
          <Link href="/ganadores" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Ganadores</Link>
          <Link href="/consulta-tickets" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Consultar Tickets</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/compra-tickets">
            <button className="bg-primary hover:bg-primary-dark text-white text-xs md:text-sm font-bold px-4 md:px-6 py-2.5 rounded-full transition-all active:scale-95 shadow-lg shadow-primary/20">
              Comprar ahora
            </button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-primary-dark/30 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="/" className="text-lg font-medium text-slate-300" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link href="/nosotros" className="text-lg font-medium text-slate-300" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          <Link href="/ganadores" className="text-lg font-medium text-slate-300" onClick={() => setIsMenuOpen(false)}>Ganadores</Link>
          <Link href="/consulta-tickets" className="text-lg font-medium text-slate-300" onClick={() => setIsMenuOpen(false)}>Consultar Tickets</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
