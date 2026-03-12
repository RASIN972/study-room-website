import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { Features } from '@/components/features';
import { SocialProof } from '@/components/social-proof';
import { CtaSection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <SocialProof />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
