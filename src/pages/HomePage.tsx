import { FinalCTA } from '@/components/home/FinalCTA';
import { Hero } from '@/components/home/Hero';
import { ImpactStrip } from '@/components/home/ImpactStrip';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { StorySection } from '@/components/home/StorySection';
import { WorkPreview } from '@/components/home/WorkPreview';

export function HomePage() {
  return (
    <>
      <Hero />
      <PartnersStrip />
      <ImpactStrip />
      <StorySection />
      <WorkPreview />
      <FinalCTA />
    </>
  );
}
