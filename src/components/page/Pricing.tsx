import { Check, Gem } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Container } from "./Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="bg-card">
      <Container className="text-center flex flex-col items-center">
        <Card className="w-full max-w-2xl bg-background border-2 border-primary shadow-2xl shadow-primary/20">
          <CardHeader>
            <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
              TUDO O QUE VOCÊ LEVA
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 p-6 md:p-8">
            <div className="space-y-4 text-left w-full">
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                <span className="text-lg text-primary-foreground">
                  Código Mulher Magnética
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                <span className="text-lg text-primary-foreground">Todos os bônus</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                <span className="text-lg text-primary-foreground">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                <span className="text-lg text-primary-foreground">Acesso vitalício</span>
              </div>
            </div>

            <div className="my-6 text-center">
              <p className="text-lg text-muted-foreground">Valor real: <span className="line-through">R$297</span></p>
              <p className="text-lg text-primary-foreground mt-2">Hoje:
                <span className="ml-2 text-4xl md:text-5xl font-bold text-primary">R$29,90</span>
              </p>
            </div>

            <CtaButton>QUERO ACESSAR AGORA</CtaButton>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
