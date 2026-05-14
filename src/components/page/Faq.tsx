import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./Container";

const faqs = [
    {
        question: "Isso realmente funciona mesmo se ele disser que não sente mais nada?",
        answer: "Sim. Quando um homem diz isso, na maioria dos casos o que aconteceu foi a queda da ocitocina. O sentimento não morreu — ele apenas ficou adormecido. O Código Mulher Magnética trabalha exatamente na reativação desse hormônio no cérebro masculino."
    },
    {
        question: "Em quanto tempo começo a ver resultados?",
        answer: "Algumas mulheres percebem mudanças em poucos dias. Outras em até 7 dias."
    },
    {
        question: "Funciona mesmo se ele estiver com outra?",
        answer: "Sim. Se ele já sentiu conexão com você, é possível reativar esse vínculo."
    },
    {
        question: "Vou receber acesso imediato?",
        answer: "Sim. Liberação automática após a compra."
    },
    {
        question: "Por quanto tempo terei acesso?",
        answer: "Vitalício."
    },
    {
        question: "Existe garantia?",
        answer: "Sim. 7 dias de garantia incondicional."
    },
]

export function Faq() {
  return (
    <section className="bg-background">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
          FAQ — DÚVIDAS FREQUENTES
        </h2>
        <div className="mt-10 w-full max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-left text-base text-primary-foreground/80">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
