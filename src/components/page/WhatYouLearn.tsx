import { Container } from "./Container";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

const learningPoints = [
  "Por que ele se afastou",
  "Como reativar ocitocina em 3 fases",
  "Quais estímulos despertam apego",
  "O que enviar e quando enviar",
  "O erro que mata a reconquista",
  "Como virar o jogo mesmo se ele disser que acabou",
];

export function WhatYouLearn() {
  return (
    <section className="bg-card">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          O QUE VOCÊ VAI APRENDER
        </h2>
        <div className="mt-10 w-full max-w-3xl">
          <Card className="bg-background border-border shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-5">
                {learningPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <BookOpenCheck className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-lg md:text-xl text-left text-primary-foreground/90">
                      {point}
                    </span>
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
