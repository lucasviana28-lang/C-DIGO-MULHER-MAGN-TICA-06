import { Container } from "./Container";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Biology() {
  return (
    <section className="bg-card">
      <Container className="flex flex-col items-center gap-16">
        {/* Why he grew cold */}
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
            POR QUE ELE ESFRIOU DE VERDADE
          </h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-lg text-primary-foreground/80">
            <p>O cérebro humano se apaixona por química.</p>
            <p>
              Existe um hormônio específico responsável por:
            </p>
            <Card className="bg-background text-left my-6">
              <CardContent className="p-6">
                <ul className="space-y-2 text-primary-foreground font-semibold">
                  <li>• Apego</li>
                  <li>• Vínculo</li>
                  <li>• Conexão emocional</li>
                  <li>• Sensação de “ela é a pessoa certa”</li>
                </ul>
              </CardContent>
            </Card>
            <p>
              O nome dele é <span className="font-bold text-accent text-2xl">OCITOCINA</span>.
            </p>
            <p>
              Quando os níveis de ocitocina caem… o amor não “acaba”.
              <br />
              <span className="font-bold">Ele adormece.</span>
            </p>
            <div className="mt-6 p-6 border-l-4 border-accent bg-background">
                <p className="font-bold text-xl">E quando esse hormônio para de ser produzido:</p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>Ele esfria</li>
                    <li>Ele se distancia</li>
                    <li>Ele confunde sentimentos</li>
                    <li>Ele acha que não sente mais nada</li>
                </ul>
            </div>
            <p className="mt-6 font-bold text-xl">
              Não porque você perdeu valor.
              <br />
              Mas porque o cérebro dele parou de liberar o hormônio do
              vínculo.
            </p>
          </div>
        </div>

        <Separator className="bg-border/50 max-w-sm mx-auto" />

        {/* The good news */}
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">
            ✅ A BOA NOTÍCIA
          </h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-lg text-primary-foreground/80">
            <p>
              Se a queda da ocitocina causou o afastamento…
              <br />
              <span className="font-bold text-primary-foreground text-xl">
                A REATIVAÇÃO DA OCITOCINA faz o caminho inverso.
              </span>
            </p>
            <p>O cérebro dele pode voltar a produzir esse hormônio.</p>
            <p className="text-xl font-bold">E quando isso acontece…</p>
            <Card className="bg-background border-primary/50 text-left mt-6">
                <CardContent className="p-6 space-y-4">
                    <p>💘✅ Ele começa a sentir saudade.</p>
                    <p>💘✅ Começa a lembrar de você.</p>
                    <p>💘✅ Começa a se aproximar.</p>
                </CardContent>
            </Card>
            <div className="mt-6 space-y-2 text-xl font-bold text-primary-foreground">
                <p>Sem você pedir.</p>
                <p>Sem você explicar.</p>
                <p>Sem você correr atrás.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
