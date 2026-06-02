"use client";

import React, { useState } from "react";
import { Search, Ticket, Calendar, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MockTicket {
  number: string;
  raffle: string;
  date: string;
  status: "active" | "pending";
}

export default function TicketsPage() {
  const [docNumber, setDocNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<MockTicket[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docNumber.trim()) return;

    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      setLoading(false);
      setSearched(true);

      if (docNumber.trim() === "12345678" || docNumber.trim() === "77777777") {
        setTickets([
          { number: "AGT-09881", raffle: "1 Departamento en San Miguel", date: "28/05/2026", status: "active" },
          { number: "AGT-09882", raffle: "1 Departamento en San Miguel", date: "28/05/2026", status: "active" },
          { number: "AGT-14402", raffle: "1 Camioneta KIA SONET", date: "29/05/2026", status: "active" },
        ]);
      } else {
        setTickets([]);
      }
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col gap-10">

      {/* Header */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight uppercase">
          Ver Mis Tickets
        </h1>
        <p className="text-sm md:text-base text-muted-foreground font-medium mt-2">
          Consulta tus tickets adquiridos para nuestros sorteos.
        </p>
      </div>

      {/* Search Card */}
      <div className="bg-gradient-to-b from-card to-card/80 border border-border rounded-3xl p-6 md:p-8 shadow-xl">
        <form onSubmit={handleSearch} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="docNumber" className="text-sm font-bold text-muted-foreground">
              Número de Documento (DNI / CE) o Celular
            </label>
            <div className="relative">
              <input
                id="docNumber"
                type="text"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                placeholder="Ingresa tu documento (Ej: 12345678 para probar)"
                className="w-full bg-background border border-border rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                disabled={loading}
              />
              <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !docNumber.trim()}
            className="w-full bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-right text-secondary-foreground font-black py-4 px-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-2 uppercase tracking-wider text-sm disabled:opacity-40 disabled:pointer-events-none shadow-[0_0_20px_oklch(90%_0.22_102/0.3)] hover:shadow-[0_0_35px_oklch(90%_0.22_102/0.55)] active:scale-95"
          >
            {loading ? "Buscando..." : "Buscar mis tickets"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-secondary" />
        </div>
      )}

      {/* Results */}
      {searched && !loading && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Ticket className="w-5 h-5 text-secondary" />
            Resultados de búsqueda
          </h2>

          {tickets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-card to-card/80 rounded-2xl p-6 border border-border hover:border-secondary/40 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Ticket Digital
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border ${ticket.status === "active"
                        ? "bg-secondary/15 text-secondary border-secondary/30"
                        : "bg-primary/15 text-primary border-primary/30"
                        }`}>
                        {ticket.status === "active" ? "Confirmado" : "Pendiente"}
                      </span>
                    </div>
                    <h3 className="text-foreground font-black text-2xl tracking-wide mb-1">
                      {ticket.number}
                    </h3>
                    <p className="text-muted-foreground text-sm font-semibold mb-4">
                      {ticket.raffle}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 flex justify-between items-center text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      Compra: {ticket.date}
                    </span>
                    <span className="flex items-center gap-1 text-secondary font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verificado
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-3xl p-8 text-center flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full border border-primary/20">
                <AlertCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-foreground font-bold text-lg">No se encontraron tickets</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                  No pudimos hallar tickets asociados a este documento. Si acabas de realizar tu compra, el proceso de validación puede tardar unos minutos.
                </p>
              </div>
              <Link
                href="/"
                className="text-xs font-bold text-secondary hover:underline mt-2 flex items-center gap-1"
              >
                Volver a la página principal
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Info Card */}
      <div className="bg-card/50 border border-border rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center">
        <AlertCircle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
        <p className="text-xs text-muted-foreground leading-relaxed text-center md:text-left">
          ¿Tienes problemas para encontrar tus tickets? Asegúrate de haber ingresado el mismo documento que proporcionaste al momento del pago. Si el problema persiste, comunícate con nuestro canal de soporte para ayudarte de inmediato.
        </p>
      </div>

    </div>
  );
}
