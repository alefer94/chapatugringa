"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Ticket {
  id: string;
  raffle: string;
  date: string;
  status: string;
}

export default function ConsultTicketsPage() {
  const [dni, setDni] = useState("");
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Ticket[] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // solo números
    if (!/^\d*$/.test(value)) return;

    // máximo 8
    if (value.length > 8) return;

    setDni(value);

    if (value.length > 0 && value.length < 8) {
      setError("El DNI debe tener 8 números");
    } else {
      setError("");
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (dni.length !== 8) {
      setError("Ingresa un DNI válido");
      return;
    }

    setIsSearching(true);
    setResults(null);

    try {
      // simulación de búsqueda
      await new Promise((resolve) => setTimeout(resolve, 1200));

      alert("Error: Se ha producido un error al consultar los tickets");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col font-display selection:bg-primary/30">
      {/* Header - Replicated from HTML */}
      <>
        <header className="w-full border-b border-primary/20 bg-background-dark sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  priority={true}
                />
              </div>
              <Link href="/">
                <h1 className="text-xl font-black tracking-tight text-white uppercase">
                  Agarra Tu Gringa
                </h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md flex flex-col gap-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-black text-white leading-tight">
                Consulta tus tickets
              </h2>
              <p className="text-primary/70 text-lg">
                Ingresa tu DNI para ver tus tickets del sorteo
              </p>
            </div>
            <div className="bg-white/[0.03] p-10 rounded-2xl border border-primary/20 shadow-2xl backdrop-blur-sm">
              <form className="space-y-6" onSubmit={handleSearch}>
                <div className="space-y-2">
                  <label
                    className="text-sm font-semibold uppercase tracking-wider text-primary/60 px-1"
                    htmlFor="dni"
                  >
                    Documento Nacional de Identidad
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40">
                      badge
                    </span>

                    <input
                      value={dni}
                      onChange={handleInputChange}
                      maxLength={8}
                      className={`w-full h-16 pl-12 pr-4 bg-background-dark/80 border-2 rounded-xl text-xl font-semibold focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all outline-none text-white placeholder:text-primary/30 ${error ? "border-red-500" : "border-primary/20"}`}
                      id="dni"
                      name="dni"
                      placeholder="Escribe tu número de DNI"
                      type="text"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm px-1">{error}</p>
                  )}
                </div>

                <button
                  disabled={dni.length !== 8 || isSearching}
                  className="w-full h-16 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-background-dark font-black text-xl rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 group"
                  type="submit"
                >
                  {isSearching ? (
                    <>
                      <span>BUSCANDO...</span>
                    </>
                  ) : (
                    <>
                      <span>CONSULTAR</span>
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3" />
              </div>
              <div className="h-1 bg-primary/20 rounded-full" />
              <div className="h-1 bg-primary/20 rounded-full" />
            </div>
          </div>
        </main>
        <footer className="w-full py-10 border-t border-primary/20">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-primary/40 text-sm">
              © 2024 Agarra Tu Gringa. Todos los derechos reservados.
            </p>
            <div className="flex gap-8">
              <a
                className="text-primary/60 hover:text-primary text-sm font-medium transition-colors"
                href="#"
              >
                Términos y Condiciones
              </a>
              <a
                className="text-primary/60 hover:text-primary text-sm font-medium transition-colors"
                href="#"
              >
                Privacidad
              </a>
            </div>
          </div>
        </footer>
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-20 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
      </>
    </div>
  );
}
