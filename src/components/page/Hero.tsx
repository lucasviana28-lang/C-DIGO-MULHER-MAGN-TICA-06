import { CheckCircle2 } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Container } from "./Container";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export function Hero() {
  const { reconciliation } = placeholderImages;

  return (
    <section className="bg-background border-b border-border">
      <Container className="text-center flex flex-col items-center py-16 md:py-24">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary-foreground leading-tight">
          CÓDIGO <span className="text-accent">MULHER MAGNÉTICA</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl text-primary-foreground/80">
          💘 <span className="text-foreground font-bold">A única sequência biológica comprovada cientificamente</span> que faz o cérebro dele voltar a produzir o hormônio do amor
        </p>
        <p className="mt-6 text-base md:text-lg max-w-3xl text-center text-primary-foreground/90 bg-card p-4 rounded-lg border border-border">
          💝 Ative o protocolo de reativação emocional que reconecta você ao
          subconsciente dele, <span className="text-foreground font-bold">mesmo que ele esteja frio, distante, tenha te bloqueado, esteja confuso ou dizendo que “acabou”.</span>
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-base text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Método simples</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Baseado em neurociência emocional</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Feito para mulheres que querem reconquistar o ex</span>
          </div>
        </div>

        <div className="my-8 rounded-lg overflow-hidden border-2 border-primary shadow-lg max-w-3xl w-full">
          <Image
            src={reconciliation.src}
            alt={reconciliation.alt}
            width={reconciliation.width}
            height={reconciliation.height}
            className="object-cover w-full h-auto"
            data-ai-hint={reconciliation.hint}
          />
        </div>
      </Container>
    </section>
  );
}
