"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function UrgencyBar() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-accent text-center py-2 text-sm md:text-base font-semibold text-accent-foreground">
      <div className="flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span>
          Oferta especial disponível apenas hoje
          {currentDate && `, ${currentDate}`}!
        </span>
        <Sparkles className="h-4 w-4" />
      </div>
    </div>
  );
}
