import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background-dark py-12 px-6 border-t border-primary-dark/30 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="space-y-6 max-w-sm">
          <div className="aspect-16/10 relative overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="Agarra Tu Gringa Logo" 
              width={180} 
              height={45} 
              className="h-12 w-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            La plataforma de sorteos más confiable del país. 
            Participa y gana premios increíbles con total transparencia y seguridad.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <i className="phi-facebook-logo-fill"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <i className="phi-instagram-logo-fill"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <i className="phi-whatsapp-logo-fill"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Páginas</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-400 hover:text-primary text-sm transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-slate-400 hover:text-primary text-sm transition-colors">Nosotros</Link></li>
              <li><Link href="/ganadores" className="text-slate-400 hover:text-primary text-sm transition-colors">Ganadores</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ayuda</h4>
            <ul className="space-y-2">
              <li><Link href="/contacto" className="text-slate-400 hover:text-primary text-sm transition-colors">Contacto</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-primary text-sm transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/terminos" className="text-slate-400 hover:text-primary text-sm transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>
          <div className="space-y-4 Col-span-2 md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Atención</h4>
            <p className="text-slate-400 text-sm">Lun - Vie: 9am - 6pm</p>
            <p className="text-primary text-sm font-bold">soporte@agarratugringa.com</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center">
        <p>© 2026 Agarra Tu Gringa. Todos los derechos reservados.</p>
        <p>Una marca de Dashiell Entretenimiento S.A.C.</p>
      </div>
    </footer>
  );
};

export default Footer;
