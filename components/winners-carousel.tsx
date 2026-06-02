"use client";

import { Trophy } from "lucide-react";

const winnerImages = [
  { id: 1, url: "https://pchujoy.com/images/winners/1.webp" },
  { id: 2, url: "https://pchujoy.com/images/winners/2.webp" },
  { id: 3, url: "https://pchujoy.com/images/winners/3.webp" },
  { id: 4, url: "https://pchujoy.com/images/winners/4.webp" },
  { id: 5, url: "https://pchujoy.com/images/winners/5.webp" },
  { id: 6, url: "https://pchujoy.com/images/winners/6.webp" },
  { id: 7, url: "https://pchujoy.com/images/winners/7.webp" },
  { id: 8, url: "https://pchujoy.com/images/winners/8.webp" },
  { id: 9, url: "https://pchujoy.com/images/winners/9.webp" },
  { id: 10, url: "https://pchujoy.com/images/winners/10.webp" },
  { id: 11, url: "https://pchujoy.com/images/winners/11.webp" },
  { id: 12, url: "https://pchujoy.com/images/winners/12.webp" },
  { id: 13, url: "https://pchujoy.com/images/winners/13.webp" },
  { id: 14, url: "https://pchujoy.com/images/winners/14.webp" },
  { id: 15, url: "https://pchujoy.com/images/winners/15.webp" },
];

export default function WinnersCarousel() {
  const doubleImages = [...winnerImages, ...winnerImages];

  return (
    <section className="w-full overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-start gap-4">
        <div className="bg-primary/20 p-2.5 rounded-xl border border-primary/20 shadow-inner">
          <Trophy className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
            Ellos Ya Ganaron
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-medium mt-0.5">
            El próximo puedes ser tú...
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] py-2 w-max">
          {doubleImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[136px] md:w-[176px] lg:w-[218px] aspect-square flex-shrink-0 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-border hover:border-secondary/40 transition-all duration-300 hover:scale-[1.03] bg-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.url}
                alt="Ganador"
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
