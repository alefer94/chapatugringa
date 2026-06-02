import { Trophy, Star, Gift, Calendar, Ticket } from "lucide-react";
import Link from "next/link";

interface Winner {
  id: number;
  name: string;
  prize: string;
  prizeLabel: string;
  ticket: string;
  date: string;
  city: string;
  image: string;
  featured?: boolean;
}

const winners: Winner[] = [
  {
    id: 1,
    name: "Carlos M.",
    prize: "1 Departamento en San Miguel",
    prizeLabel: "Gran Premio",
    ticket: "AGT-00142",
    date: "31/05/2026",
    city: "Lima",
    image: "https://pchujoy.com/images/winners/1.webp",
    featured: true,
  },
  {
    id: 2,
    name: "María L.",
    prize: "1 Camioneta KIA SONET",
    prizeLabel: "2do Premio",
    ticket: "AGT-03867",
    date: "31/05/2026",
    city: "Arequipa",
    image: "https://pchujoy.com/images/winners/2.webp",
    featured: true,
  },
  {
    id: 3,
    name: "Roberto P.",
    prize: "1 Auto KIA SOLUTO",
    prizeLabel: "3er Premio",
    ticket: "AGT-07291",
    date: "31/05/2026",
    city: "Trujillo",
    image: "https://pchujoy.com/images/winners/3.webp",
    featured: true,
  },
  {
    id: 4,
    name: "Lucía R.",
    prize: "S/ 90,000 en efectivo",
    prizeLabel: "4to Premio",
    ticket: "AGT-11540",
    date: "31/05/2026",
    city: "Cusco",
    image: "https://pchujoy.com/images/winners/4.webp",
    featured: true,
  },
  {
    id: 5,
    name: "Javier H.",
    prize: "Premio especial",
    prizeLabel: "Premio",
    ticket: "AGT-05531",
    date: "31/05/2026",
    city: "Piura",
    image: "https://pchujoy.com/images/winners/5.webp",
  },
  {
    id: 6,
    name: "Ana T.",
    prize: "Premio especial",
    prizeLabel: "Premio",
    ticket: "AGT-09912",
    date: "31/05/2026",
    city: "Chiclayo",
    image: "https://pchujoy.com/images/winners/6.webp",
  },
];

export default function GanadoresPage() {
  const featured = winners.filter((w) => w.featured);
  const rest = winners.filter((w) => !w.featured);

  return (
    <div className="max-w-6xl mx-auto w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col gap-12">

      {/* ── Header ── */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-primary/20 border border-secondary/30 p-5 rounded-3xl shadow-[0_0_32px_oklch(90%_0.22_102/0.3)] inline-block">
          <Trophy className="w-10 h-10 text-secondary drop-shadow-[0_0_10px_oklch(90%_0.22_102/0.9)]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
          Ganadores del Sorteo
        </h1>
        <p className="text-muted-foreground max-w-xl text-sm md:text-base">
          Estas son las personas que cambiaron su vida con{" "}
          <span className="text-secondary font-bold">Agarra tu Gringa</span>.
          Tú podrías ser el próximo.
        </p>
        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 mt-2 justify-center">
          {[
            { label: "Ganadores", value: "6+" },
            { label: "Premios entregados", value: "S/ 1M+" },
            { label: "Sorteos realizados", value: "1" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 bg-card border border-border px-6 py-3 rounded-2xl">
              <span className="text-secondary font-black text-2xl">{value}</span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider font-bold">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured winners (top 4 prizes) ── */}
      <section className="bg-gradient-to-r from-card/60 to-card/30 border border-border rounded-3xl p-6 md:p-8 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2.5 rounded-xl border border-primary/20">
            <Star className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h2 className="text-foreground font-black text-xl">Grandes Ganadores</h2>
            <p className="text-muted-foreground text-xs">Premio principal del 1er Gran Sorteo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((winner) => (
            <div
              key={winner.id}
              className="group relative bg-gradient-to-b from-card to-background border border-border hover:border-secondary/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_8px_32px_oklch(90%_0.22_102/0.2)] transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Prize badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary text-secondary-foreground text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {winner.prizeLabel}
                  </span>
                </div>
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <p className="text-foreground font-black text-lg leading-tight">{winner.name}</p>
                <p className="text-secondary text-xs font-bold leading-snug">{winner.prize}</p>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border pt-2 mt-1">
                  <span className="flex items-center gap-1">
                    <Ticket className="w-3 h-3" /> {winner.ticket}
                  </span>
                  <span>{winner.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Other winners ── */}
      {rest.length > 0 && (
        <section className="bg-gradient-to-r from-card/60 to-card/30 border border-border rounded-3xl p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2.5 rounded-xl border border-primary/20">
              <Gift className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h2 className="text-foreground font-black text-xl">Otros Ganadores</h2>
              <p className="text-muted-foreground text-xs">Premios adicionales del sorteo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rest.map((winner) => (
              <div
                key={winner.id}
                className="group flex items-center gap-4 bg-card/60 hover:bg-card border border-border hover:border-secondary/30 rounded-2xl p-4 transition-all duration-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-border group-hover:border-secondary/30 transition-all"
                />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-foreground font-bold text-sm truncate">{winner.name}</p>
                  <p className="text-secondary text-xs font-medium truncate">{winner.prize}</p>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
                    <span className="flex items-center gap-0.5">
                      <Calendar className="w-3 h-3" /> {winner.date}
                    </span>
                    <span>· {winner.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <div className="flex flex-col items-center gap-4 py-4">
        <p className="text-muted-foreground text-sm font-medium">
          El próximo sorteo ya está en marcha —{" "}
          <span className="text-secondary font-bold">¡no te quedes fuera!</span>
        </p>
        <Link href="/participar">
          <button className="bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-right text-secondary-foreground font-black px-12 py-4 rounded-2xl flex items-center gap-3 uppercase tracking-widest text-sm shadow-[0_0_28px_oklch(90%_0.22_102/0.35)] hover:shadow-[0_0_45px_oklch(90%_0.22_102/0.6)] transition-all duration-500 hover:-translate-y-0.5 active:scale-95">
            <Ticket className="w-5 h-5 animate-pulse" />
            Participar del Sorteo
          </button>
        </Link>
      </div>

    </div>
  );
}
