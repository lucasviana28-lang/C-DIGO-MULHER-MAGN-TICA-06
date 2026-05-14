import { CheckCircle2 } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Container } from "./Container";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Faz ele voltar a pensar em você",
  "Faz ele puxar assunto",
  "Faz ele sentir saudade",
  "Faz ele se reaproximar",
  "Faz ele querer te ver",
];

export function StopIgnored() {
  return (
    <section className="bg-background">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
          DEIXE DE SER IGNORADA
        </h2>

        <div className="mt-10 w-full max-w-2xl">
          <Card className="bg-card border-primary/50">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-lg md:text-xl text-primary-foreground font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 text-center space-y-2 text-xl md:text-2xl font-bold text-primary-foreground/80">
            <p>Sem implorar.</p>
            <p>Sem cobrar.</p>
            <p>Sem se humilhar.</p>
        </div>

        <div className="mt-12 w-full flex justify-center">
          <CtaButton>QUERO ACESSAR AGORA</CtaButton>
        </div>
      </Container>
    </section>
  );
}
