import { CheckCircle, XCircle } from "lucide-react";
import { Container } from "./Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ourMethod = [
  "Baseado em neurociência",
  "Ativa biologia",
  "Não depende de joguinho",
  "Não depende de sorte",
];
const otherMethods = ["Forçar conversa", "Implorar", "Joguinhos", "Zero resultado"];

export function Comparison() {
  return (
    <section className="bg-background">
      <Container className="text-center flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <Card className="bg-card border-primary">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">
                CÓDIGO MULHER MAGNÉTICA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {ourMethod.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-base text-primary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-muted-foreground">
                OUTROS MÉTODOS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {otherMethods.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-base text-muted-foreground line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
