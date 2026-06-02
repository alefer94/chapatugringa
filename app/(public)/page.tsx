import Image from "next/image";
import Link from "next/link";
import WinnersCarousel from "@/components/winners-carousel";
import { Gift, Ticket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden z-0">
      {/* ── Background Blobs (Aurora Effect) ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
        {/* Blob 1: Bright Emerald Green */}
        <div className="absolute top-[15%] left-[-15%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-emerald-400/25 blur-[80px] md:blur-[120px] animate-float-blob-1" />
        
        {/* Blob 2: Electric Yellow */}
        <div className="absolute top-[40%] right-[-15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-secondary/30 blur-[80px] md:blur-[120px] animate-float-blob-2" />
        
        {/* Blob 3: Neon Cyan / Teal */}
        <div className="absolute bottom-[15%] left-[5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-cyan-500/20 blur-[90px] md:blur-[130px] animate-float-blob-3" />
      </div>

      {/* ── Hero Banner ── */}
      <div className="w-full relative mb-4">
        <Image
          src="/banner-agarra-tu-gringa.png"
          alt="Banner Promocional"
          width={1640}
          height={624}
          priority
          className="block w-full h-auto"
        />
        {/* bottom fade into page background */}
      </div>

      {/* ── Announcement Marquee ── */}
      <div className="w-full relative overflow-hidden bg-gradient-to-r from-primary-container via-[oklch(38%_0.20_140)] to-primary-container py-3 font-extrabold uppercase tracking-widest text-xs md:text-sm flex shadow-[0_2px_20px_oklch(58%_0.22_140/0.4)]">
        {/* side glow hints */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary-container to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary-container to-transparent z-10 pointer-events-none" />
        <div className="flex gap-16 animate-marquee w-max text-secondary">
          {Array(10).fill("🎟️  El sorteo se realizará el domingo 31 de mayo. ¡No te quedes sin participar!  •").map((text, idx) => (
            <span key={idx} className="whitespace-nowrap drop-shadow-[0_0_8px_oklch(90%_0.21_105/0.6)]">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Content below banner ── */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 px-margin-mobile md:px-margin-desktop py-12">

        {/* ── Prizes Section ── */}
        <section className="bg-gradient-to-r from-card/60 to-card/30 border border-border rounded-3xl p-6 md:p-8">
          {/* Section header */}
          <div className="mb-8 flex flex-row justify-between items-end">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-2xl border border-primary/20 shadow-[0_0_20px_oklch(44%_0.14_165/0.25)]">
                <Gift className="w-6 h-6 text-secondary drop-shadow-[0_0_6px_oklch(90%_0.22_102/0.8)]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                  Premios del primer Gran Sorteo
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground font-medium mt-0.5">
                  Esto es lo que puedes ganar
                </p>
              </div>
            </div>
          </div>

          {/* Prize cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { src: "/departamento.png", alt: "1 Departamento en San Miguel", label: "1 Departamento en San Miguel" },
              { src: "/auto-1.png", alt: "Camioneta KIA", label: "1 Camioneta KIA SONET" },
              { src: "/auto-2.png", alt: "Auto KIA Soluto", label: "1 Auto KIA SOLUTO" },
              { src: "/dinero.png", alt: "S/ 90,000 en efectivo", label: "S/ 90,000 en efectivo" },
            ].map(({ src, alt, label }) => (
              <div
                key={label}
                className="relative group flex flex-col rounded-2xl overflow-hidden border border-border bg-gradient-to-b from-card to-background shadow-xl hover:shadow-[0_8px_40px_oklch(44%_0.14_165/0.3)] hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={src}
                    alt={alt}
                  />
                  {/* image bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
                </div>
                {/* Label */}
                <div className="p-5 flex-grow flex flex-col justify-center">
                  <h3 className="font-headline-md text-headline-md text-foreground group-hover:text-secondary transition-colors duration-300">
                    {label}
                  </h3>
                </div>
                {/* corner glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-secondary/15 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center justify-center gap-4">
          {/* outer glow ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary via-accent to-secondary blur-xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none scale-110" />
            <Link href="/participar">
              <button className="relative bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-right text-on-secondary font-black text-lg md:text-xl px-14 py-5 rounded-2xl shadow-[0_0_30px_oklch(90%_0.21_105/0.4)] hover:shadow-[0_0_50px_oklch(90%_0.21_105/0.65)] transition-all duration-500 transform hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-widest">
                <Ticket className="w-6 h-6 animate-pulse" />
                Participar del Sorteo
              </button>
            </Link>
          </div>
          <p className="text-xs text-on-surface-variant font-medium text-center">
            Adquiere tus boletos pagando con Yape o Plin · S/10 = 1 ticket
          </p>
        </div>

        {/* ── Winners Carousel ── */}
        <div className="bg-gradient-to-r from-card/60 to-card/30 border border-border rounded-3xl p-6 md:p-8 overflow-hidden">
          <WinnersCarousel />
        </div>

      </div>
    </div>
  );
}
