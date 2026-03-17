import Image from 'next/image';
import Link from 'next/link';

interface RaffleCardProps {
  title: string;
  price: number;
  imageUrl: string;
  tag?: string;
  prizesCount: number;
  prizes: string[];
}

const RaffleCard = ({ title, price, imageUrl, tag, prizesCount, prizes }: RaffleCardProps) => {
  return (
    <div className="group relative bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">
      <div className="absolute top-4 left-4 z-10">
        {tag && (
          <span className="px-3 py-1 bg-primary text-white text-[10px] font-black tracking-widest uppercase rounded-full shadow-lg">
            {tag}
          </span>
        )}
      </div>
      
      <div className="aspect-16/10 relative overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-tighter">
              <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
              {prizesCount} Premios en juego
            </div>
          </div>
          <div className="text-right">
            <span className="block text-xs font-bold text-slate-400 uppercase leading-none mb-1">Desde</span>
            <span className="text-3xl font-black text-primary">S/ {price.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-8">
          {prizes.map((prize, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
              {prize}
            </div>
          ))}
        </div>
        
        <Link href="/compra-tickets">
          <button className="w-full py-4 bg-white/5 hover:bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl border border-white/10 hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 active:scale-95">
            Participar Ahora
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RaffleCard;
