import { UrgencyBar } from "@/components/page/UrgencyBar";
import { Hero } from "@/components/page/Hero";
import { SocialProof } from "@/components/page/SocialProof";
import { BeHonest } from "@/components/page/BeHonest";
import { Biology } from "@/components/page/Biology";
import { ProductInfo } from "@/components/page/ProductInfo";
import { WorksWith } from "@/components/page/WorksWith";
import { StopIgnored } from "@/components/page/StopIgnored";
import { WhatYouLearn } from "@/components/page/WhatYouLearn";
import { Bonuses } from "@/components/page/Bonuses";
import { Pricing } from "@/components/page/Pricing";
import { Comparison } from "@/components/page/Comparison";
import { Guarantee } from "@/components/page/Guarantee";
import { Faq } from "@/components/page/Faq";
import { FinalCta } from "@/components/page/FinalCta";
import { Footer } from "@/components/page/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <UrgencyBar />
      <main className="flex flex-col items-center overflow-x-hidden">
        <Hero />
        <SocialProof />
        <BeHonest />
        <Biology />
        <ProductInfo />
        <WorksWith />
        <StopIgnored />
        <WhatYouLearn />
        <Bonuses />
        <Pricing />
        <Comparison />
        <Guarantee />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
