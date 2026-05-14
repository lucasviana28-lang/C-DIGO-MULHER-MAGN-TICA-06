import { Gift } from "lucide-react";
import { Container } from "./Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bonuses = [
    { title: "Bônus 1", description: "Áudio Guiado de Reativação Emocional" },
    { title: "Bônus 2", description: "Mensagens Prontas de Reconexão" },
    { title: "Bônus 3", description: "Plano 7 Dias de Reaproximação" },
    { title: "Bônus 4", description: "Checklist Anti-Erros" },
]

export function Bonuses() {
  return (
    <section className="bg-background">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          BÔNUS EXCLUSIVOS
        </h2>
        <div className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold animate-pulse">
          🎁 BÔNUS LIMITADOS ATÉ 23:59 🎁
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {bonuses.map((bonus, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Gift className="h-8 w-8 text-primary" />
                        <div>
                            <p className="text-sm text-primary-foreground/70">{bonus.title}</p>
                            <CardTitle className="text-lg text-left">{bonus.description}</CardTitle>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </Container>
    </section>
  );
}
