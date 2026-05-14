import { Container } from "./Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductInfo() {
  return (
    <section className="bg-background">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          O QUE É O <span className="text-accent">CÓDIGO MULHER MAGNÉTICA</span>
        </h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-primary-foreground/80">
          <p>
            É um passo a passo psicológico e biológico que ativa gatilhos
            específicos no cérebro masculino responsáveis pela liberação de
            ocitocina.
          </p>

          <Card className="bg-card border-border my-8">
            <CardHeader>
              <CardTitle className="text-primary text-2xl font-bold">Você aprende:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left text-lg">
              <p>• Como enviar estímulos certos</p>
              <p>• Na ordem certa</p>
              <p>• Do jeito certo</p>
              <p className="pt-4 text-primary-foreground/80">
                Para fazer o cérebro dele reassociar você à sensação de
                segurança, prazer e conexão.
              </p>
            </CardContent>
          </Card>

          <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg md:text-xl text-primary-foreground/80">Resultado:</p>
            <p className="text-xl md:text-2xl font-bold text-primary-foreground mt-2">
              Ele volta porque o próprio cérebro pede.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
