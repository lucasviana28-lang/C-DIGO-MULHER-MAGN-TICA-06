import { CtaButton } from "./CtaButton";
import { Container } from "./Container";

export function FinalCta() {
  return (
    <section className="bg-card">
      <Container className="text-center flex flex-col items-center">
        <CtaButton>QUERO ACESSAR AGORA — R$29,90</CtaButton>
      </Container>
    </section>
  );
}
