"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Home, Trophy, Phone, Menu, X, Ticket } from "lucide-react";

const Facebook = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navLinks = [
  { label: "Inicio", Icon: Home, href: "/", iconColor: "text-sky-400" },
  { label: "Ganadores", Icon: Trophy, href: "/ganadores", iconColor: "text-amber-400" },
  { label: "Facebook", Icon: Facebook, href: "https://web.facebook.com/AgarraTuGringaOficial", external: true, iconColor: "text-[#1877F2]" },
  { label: "Contacto", Icon: Phone, href: "#", iconColor: "text-emerald-400" },
];

export default function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Need mounted state for createPortal (only works client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Drawer rendered via portal so it escapes the header's stacking context
  const drawer = isOpen && mounted
    ? createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* Dark backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
          />

          {/* Slide-in panel */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface border-l border-white/10 flex flex-col shadow-2xl animate-slide-in-right">
            {/* Drawer header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
              <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0">
                <Image
                  src="/agarra_tu_gringa.png"
                  alt="Agarra tu gringa"
                  width={48}
                  height={48}
                  className="w-auto h-8"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-muted-foreground hover:text-secondary hover:bg-white/5 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map(({ label, Icon, href, external, iconColor }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive(href)
                        ? "text-secondary bg-secondary/10 border border-secondary/20"
                        : "text-on-surface-variant border border-transparent hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA at bottom */}
            <div className="px-4 py-4 border-t border-white/10">
              <Link href="/tickets" onClick={() => setIsOpen(false)} className="block">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-secondary via-accent to-secondary text-on-secondary py-3 rounded-full font-black tracking-wide shadow-[0_0_20px_oklch(90%_0.21_105/0.3)] active:scale-95 transition-transform">
                  <Ticket className="w-5 h-5" />
                  Ver mis tickets
                </button>
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/agarra_tu_gringa.png"
          alt="Agarra tu gringa"
          width={80}
          height={80}
          className="w-auto h-12 md:h-16 animate-[bounce-soft_1s_infinite] active:scale-110 drop-shadow-[0_0_12px_oklch(90%_0.21_105/0.4)]"
        />
      </Link>

      {/* Desktop Nav links — only visible md+ */}
      <nav className="hidden md:flex items-center gap-2 bg-black/30 backdrop-blur-xl border border-white/10 p-1 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        {navLinks.map(({ label, Icon, href, external, iconColor }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full font-label-lg text-label-lg transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${isActive(href)
              ? "text-secondary bg-secondary/10 border border-secondary/20 shadow-[0_0_12px_oklch(90%_0.22_102/0.2)]"
              : "text-on-surface-variant border border-transparent hover:text-white hover:bg-white/5"
              }`}
          >
            <Icon className={`w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-115 group-hover:rotate-6 ${iconColor}`} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger — only visible below md */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-white/5 transition-colors"
        aria-label="Abrir menú"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Drawer portal — renders outside the header stacking context */}
      {drawer}
    </>
  );
}
