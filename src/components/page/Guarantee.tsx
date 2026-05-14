import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";

export function Guarantee() {
  return (
    <section className="bg-card">
      <Container className="text-center flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl bg-background p-8 rounded-lg border-2 border-dashed border-primary">
          <ShieldCheck className="h-24 w-24 text-primary shrink-0" />
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
              GARANTIA
            </h2>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Você tem 7 dias para testar.
            </p>
            <p className="mt-4 text-xl md:text-2xl font-bold text-primary-foreground">
              Ou funciona…
              <br />
              Ou você recebe 100% do dinheiro de volta.
            </p>
            <p className="mt-2 text-base text-muted-foreground">
              Sem perguntas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
