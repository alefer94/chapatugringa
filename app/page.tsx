"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-background-dark font-display text-slate-100 antialiased">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-primary-dark/30 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority={true}
              />
              <h1 className="text-xl font-black tracking-tight text-white hidden sm:block">
                AGARRA TU GRINGA
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="/"
              >
                Inicio
              </Link>
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="/compra-tickets"
              >
                Sorteos
              </Link>
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#"
              >
                Ganadores
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="/consulta-tickets"
                className="bg-primary hover:bg-primary-light text-background-dark px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-[0_0_20px_rgba(69,172,53,0.5)]"
              >
                Ver mis tickets
              </Link>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-background-dark to-background-dark" />
            <div className="w-full h-full bg-[url('https://placeholder.pics/svg/1200x800')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/20 text-primary-light rounded-full border border-primary/30">
              ¡El momento de ganar es hoy!
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white">
              Cambia tu vida con <br />
              <span className="text-primary">Nuestros Grandes Sorteos</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Participa en las rifas más confiables del Perú. Camionetas,
              departamentos y premios en efectivo te esperan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-light text-background-dark font-black text-lg rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(158,196,30,0.4)] animate-pulse-slow flex items-center justify-center"
                href="#raffles"
              >
                COMPRAR TICKETS AHORA
              </a>
              <a
                className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
                href="#"
              >
                Ver Ganadores
              </a>
            </div>
          </div>
        </section>
        {/* Main Raffles Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto w-full" id="raffles">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">
                Sorteos Activos
              </h3>
              <p className="text-slate-400">
                Selecciona el sorteo en el que deseas participar y adquiere tus
                entradas.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary-light font-bold">
              <span className="material-symbols-outlined">verified_user</span>
              Sorteos 100% Legales
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Raffle Card 1: Marzo */}
            <div className="group relative flex flex-col bg-background-dark border border-primary-dark/50 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(69,172,53,0.15)]">
              <div className="relative h-72 overflow-hidden">
                <Image
                  alt="Sorteo 31 de Marzo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://www.diariomotor.com/imagenes/2025/11/Toyota-Hilux-2-1-69120316d4454.jpg?class=XL"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-primary text-background-dark font-black px-4 py-1 rounded-lg text-sm shadow-lg">
                  MÁS POPULAR
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark to-transparent">
                  <h4 className="text-3xl font-black text-white">
                    Sorteo 31 de Marzo
                  </h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-primary">
                    S/ 40.00
                  </span>
                  <span className="text-slate-400 font-medium">por ticket</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <h5 className="text-sm font-bold uppercase tracking-wider text-primary-light flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      stars
                    </span>
                    20 Premios en Juego
                  </h5>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Hilux &amp; Rush
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Corolla Cross
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Avanza &amp; Yaris
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Motos &amp; Cash
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      iPhones Último Modelo
                    </div>
                  </div>
                </div>
                <Link
                  href="/compra-tickets"
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-background-dark font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  COMPRAR TICKET
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            {/* Raffle Card 2: Mayo */}
            <div className="group relative flex flex-col bg-background-dark border border-primary-dark/50 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(69,172,53,0.15)]">
              <div className="relative h-72 overflow-hidden">
                <Image
                  alt="Sorteo 10 de Mayo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://aparta.pe/wp-content/uploads/2021/03/fachada_2_berezia.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-primary-light text-background-dark font-black px-4 py-1 rounded-lg text-sm shadow-lg">
                  EDICIÓN ESPECIAL
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark to-transparent">
                  <h4 className="text-3xl font-black text-white">
                    Sorteo 10 de Mayo
                  </h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-primary">
                    S/ 60.00
                  </span>
                  <span className="text-slate-400 font-medium">por ticket</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <h5 className="text-sm font-bold uppercase tracking-wider text-primary-light flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      favorite
                    </span>
                    Especial Día de la Madre
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300 text-base font-semibold">
                      <span className="material-symbols-outlined text-primary">
                        apartment
                      </span>
                      Departamento de Estreno
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-base font-semibold">
                      <span className="material-symbols-outlined text-primary">
                        payments
                      </span>
                      Premios en efectivo directos
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-base font-semibold">
                      <span className="material-symbols-outlined text-primary">
                        redeem
                      </span>
                      Sorpresas exclusivas para mamá
                    </div>
                  </div>
                </div>
                <Link
                  href="/compra-tickets"
                  className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-black rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  COMPRAR TICKET
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="bg-primary-dark/30 py-16 px-6 border-y border-primary-dark/50 bg-gradient-to-r from-background-dark via-primary-dark/20 to-background-dark">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-primary mb-2">+100k</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Participantes
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Ganadores Felices
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">S/ 2M</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                En Premios
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">100%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Transparencia
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-background-dark py-12 px-6 border-t border-primary-dark/30 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority={true}
              />
              <span className="text-slate-500 font-bold">
                © 2024 AGARRA TU GRINGA
              </span>
            </div>
            <div className="flex gap-8 text-slate-500 text-sm font-semibold">
              <a className="hover:text-primary transition-colors" href="#">
                Términos y Condiciones
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Privacidad
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Contacto
              </a>
            </div>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
