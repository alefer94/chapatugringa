import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import NavMenu from "@/components/nav-menu";

const footerLinks = [
  { label: "Términos y Condiciones", href: "https://tugringa.com/terminos-y-condiciones/" },
  { label: "T&C Concierto BTS", href: "https://tugringa.com/terminos-y-condiciones-bts/" },
  { label: "Política de Privacidad", href: "https://tugringa.com/politicas-de-privacidad/" },
  { label: "Libro de reclamaciones", href: "https://tugringa.com/libro-de-reclamaciones/" },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_oklch(34%_0.12_165)_0%,_oklch(24%_0.09_165)_55%,_oklch(16%_0.06_165)_100%)]">
      {/* Barra de navegacion publica */}
      <header className="sticky top-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_0_oklch(44%_0.14_165/0.4)]">
        <div className="flex justify-between items-center w-full px-4 md:px-margin-desktop max-w-7xl mx-auto h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/agarra_tu_gringa.png"
              alt="Agarra tu gringa"
              width={80}
              height={80}
              className="w-auto h-12 md:h-16 drop-shadow-[0_0_12px_oklch(90%_0.21_105/0.4)]"
            />
          </Link>

          {/* Nav + hamburger (NavMenu handles both) */}
          <NavMenu />

          {/* Tickets button — desktop only */}
          <Link href="/tickets" className="hidden md:block">
            <button className="relative overflow-hidden bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-right text-on-secondary px-6 py-2 rounded-full font-black tracking-wide transition-all duration-500 active:scale-95 shadow-[0_0_20px_oklch(90%_0.21_105/0.35)] hover:shadow-[0_0_30px_oklch(90%_0.21_105/0.6)]">
              Ver mis tickets
            </button>
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1">{children}</main>

      {/* Pie de pagina */}
      <footer className="w-full bg-gradient-to-b from-[oklch(20%_0.08_165)] to-[oklch(12%_0.05_165)] border-t border-border text-muted-foreground">
        {/* Glow line at top */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

        <div className="mx-auto max-w-7xl px-margin-desktop py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-6">
              <Image
                src="/agarra_tu_gringa.png"
                alt="Agarra tu gringa"
                width={120}
                height={120}
                className="w-auto h-auto transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_16px_oklch(90%_0.21_105/0.3)]"
              />
            </div>
            <div>
              <ul className="flex flex-wrap gap-6 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-secondary transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <p className="text-xs text-muted-foreground">© 2026 Agarra tu Gringa. Todos los derechos reservados.</p>
              <p className="text-[10px] text-muted-foreground/60 max-w-xl">
                Sorteos autorizados y regulados en cumplimiento con la normativa nacional. Las imágenes mostradas de vehículos y propiedades son referenciales.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-gradient-to-r from-primary/10 to-transparent px-4 py-2 rounded-full border border-primary/20">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Transparencia 100% Garantizada</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
