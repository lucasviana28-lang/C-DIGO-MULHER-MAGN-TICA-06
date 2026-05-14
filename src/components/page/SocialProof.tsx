
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export function SocialProof() {
  // Plugin de Autoplay configurado para 3 segundos
  // stopOnInteraction: false garante que ele retome após o toque/swipe
  // stopOnMouseEnter: true pausa enquanto o mouse está em cima para facilitar a leitura
  const plugin = React.useRef(
    Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  );

  const { testimonials } = placeholderImages;

  return (
    <section className="bg-card">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          Mulheres comuns. Situações reais.
        </h2>
        <p className="mt-2 text-lg md:text-xl text-primary-foreground/80">
          Resultados que parecem impossíveis… até você entender o mecanismo.
        </p>

        <div className="mt-10 w-full max-w-lg mx-auto px-4 md:px-0">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              loop: true, // Loop infinito ativado
              align: "start",
            }}
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border-2 border-primary/20 shadow-2xl bg-background">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain"
                        data-ai-hint={item.hint}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Setas de navegação visíveis apenas em telas maiores */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary/50 text-primary hover:bg-primary/10" />
              <CarouselNext className="-right-12 border-primary/50 text-primary hover:bg-primary/10" />
            </div>
          </Carousel>
          
          {/* Indicadores Visuais para Mobile */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className="h-2 w-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>

        <div className="mt-12 w-full flex justify-center">
          <CtaButton>QUERO ACESSAR AGORA</CtaButton>
        </div>
      </Container>
    </section>
  );
}
