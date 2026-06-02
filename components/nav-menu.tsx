"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Ticket, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Inicio",    href: "/" },
  { label: "Ganadores", href: "/ganadores" },
  { label: "Facebook",  href: "https://web.facebook.com/AgarraTuGringaOficial", external: true },
  { label: "Contacto",  href: "#" },
];

export default function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className="hidden md:flex gap-8">
        {navLinks.map(({ label, href, external }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`font-label-lg text-label-lg transition-all duration-200 ${
              isActive(href)
                ? "text-secondary border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* ── MOBILE: HAMBURGER BUTTON ── */}
      <button
        onClick={() => {
          console.log("Hamburger clicked! Current state:", open);
          setOpen((v) => !v);
        }}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 border border-primary/20 text-foreground hover:bg-primary/30 transition-all active:scale-90"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* ── MOBILE: DRAWER & OVERLAY (Only mounted when open) ── */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className="md:hidden fixed top-0 right-0 z-[70] h-full w-72 max-w-[85vw] bg-gradient-to-b from-card to-background border-l border-border shadow-2xl flex flex-col animate-slide-in-right"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-border">
              <span className="text-foreground font-black text-base uppercase tracking-widest">Menú</span>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary/20 text-foreground hover:bg-primary/30 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer content */}
            <div className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto">

              {/* Tickets button — prominente */}
              <Link href="/tickets" onClick={() => setOpen(false)}>
                <div className="w-full bg-gradient-to-r from-secondary via-accent to-secondary text-secondary-foreground rounded-2xl px-5 py-4 flex items-center justify-between font-black text-sm uppercase tracking-wide shadow-[0_0_20px_oklch(90%_0.22_102/0.35)] mb-2">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5" />
                    Ver mis Tickets
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Divider */}
              <div className="w-full h-px bg-border my-1" />

              {/* Nav links */}
              {navLinks.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-sm transition-all ${
                    isActive(href)
                      ? "bg-secondary/15 text-secondary border border-secondary/30"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground border border-transparent"
                  }`}
                >
                  {label}
                  <ChevronRight className={`w-4 h-4 ${isActive(href) ? "text-secondary" : "text-muted-foreground/40"}`} />
                </Link>
              ))}
            </div>

            {/* Drawer footer */}
            <div className="px-5 py-4 border-t border-border">
              <p className="text-muted-foreground/60 text-[10px] text-center">
                © 2026 Agarra tu Gringa
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
