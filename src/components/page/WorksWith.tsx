import { Check } from "lucide-react";
import { Container } from "./Container";

const situations = [
  "Aquele homem que você ama, mas que hoje age frio e distante",
  "O ex que diz que não sente mais nada por você",
  "O ex que some do nada e aparece quando quer",
  "O homem que te dá atenção e depois desaparece",
  "O homem que diz que não quer relacionamento",
  "O homem confuso, fechado ou emocionalmente travado",
  "O homem orgulhoso que não admite que sente sua falta",
  "O homem que já bloqueou você",
  "O homem que está ficando ou se envolvendo com outra",
  "Homens mais novos ou mais velhos",
  "Homens difíceis, frios ou racionais",
  "Homens que nunca falam sobre sentimentos",
];

export function WorksWith() {
  return (
    <section className="bg-card">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          FUNCIONA COM QUALQUER TIPO DE HOMEM (E SITUAÇÃO)
        </h2>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
          Funciona com qualquer tipo de homem que você imaginar…
        </p>

        <div className="mt-10 w-full max-w-4xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {situations.map((situation, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent mt-1 shrink-0" />
                <span className="text-base text-primary-foreground/90">
                  {situation}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 w-full text-center space-y-4 max-w-3xl">
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Funciona no WhatsApp, Instagram, mensagens de texto ou pessoalmente.
          </p>
          <p className="p-4 bg-background rounded-lg border border-border text-lg md:text-xl font-bold text-primary-foreground">
            Se ele já sentiu algo por você em algum momento…
            <br />
            <span className="text-primary">O CÓDIGO MULHER MAGNÉTICA funciona.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
