import { Sparkles } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Container } from "./Container";

export function Footer() {
  return (
    <section className="bg-background py-16 md:py-20">
      <Container className="text-center flex flex-col items-center">
        <p className="text-lg md:text-xl text-primary-foreground/80">
          Quando você para de tentar controlar…
        </p>
        <p className="mt-2 text-xl md:text-2xl font-bold text-primary-foreground">
          … a conexão começa a se aproximar.
        </p>

        <div className="my-10 flex items-center justify-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-headline text-2xl font-bold text-primary-foreground">
            <span className="text-accent">Código Mulher Magnética</span>
          </h3>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>

        <p className="italic text-primary-foreground/80">
          — porque o amor é químico.
        </p>

        <div className="mt-12 w-full flex justify-center">
            <CtaButton>QUERO ACESSAR AGORA</CtaButton>
        </div>
      </Container>
    </section>
  );
}
