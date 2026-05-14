import { Dot } from "lucide-react";
import { Container } from "./Container";

const desires = [
  "Que ele pense em você todos os dias",
  "Que sinta saudade sem entender por quê",
  "Que volte a procurar, puxar assunto e se aproximar",
  "Que se arrependa de ter terminado",
  "Que sinta medo de te perder",
];

export function BeHonest() {
  return (
    <section className="bg-background">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          SEJA HONESTA COM VOCÊ MESMA…
        </h2>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
          Você quer…
        </p>
        <ul className="mt-6 space-y-3 text-left max-w-lg">
          {desires.map((desire, index) => (
            <li key={index} className="flex items-center gap-3 text-lg text-primary-foreground">
              <Dot className="h-8 w-8 text-primary shrink-0" />
              <span>{desire}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
            <p className="text-lg md:text-xl font-bold text-primary-foreground">Se você quer isso…</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold text-accent">Por que ainda não aconteceu?</p>
        </div>

        <div className="mt-12 p-6 md:p-8 bg-card border border-border rounded-lg max-w-3xl text-center">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary-foreground">Porque ninguém nunca te contou a verdade:</h3>
            <div className="mt-6 space-y-4 text-lg md:text-xl text-primary-foreground/80">
                <p>❌ Não foi falta de amor.</p>
                <p>❌ Não foi falta de esforço.</p>
                <p>❌ Não foi falta de conversa.</p>
                <p className="font-bold text-2xl md:text-4xl mt-6 text-primary-foreground">
                  Foi <span className="text-accent">BIOLOGIA</span>.
                </p>
            </div>
        </div>
      </Container>
    </section>
  );
}
