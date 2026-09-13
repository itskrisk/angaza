import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-[#f5f5f7] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8 items-end">

          <Reveal as="div" className="col-span-12 lg:col-span-7 space-y-4">
            <p className="eyebrow">Support Our Outreach</p>
            <h2
              className="display-heading text-[clamp(2.5rem,7vw,5.5rem)] font-bold text-black"
              id="final-cta-title"
            >
              Direct Support.<br />
              <span className="text-[#aeaeb2]">Real Impact.</span>
            </h2>
          </Reveal>

          <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#d1d1d6] pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
            <p className="text-[17px] leading-relaxed text-[#3a3a3c] font-normal">
              Whether you send M-Pesa contributions or donate clothes, books, and essential food items, every drop arrives directly at a verified children's home, elderly center, or school.
            </p>
            <div className="space-y-3">
              <Button href="/donate" variant="accent">
                Support INK CHARITY &rarr;
              </Button>
              <p className="text-[12px] font-medium text-[#aeaeb2] uppercase tracking-wider pt-1">
                Paybill {site.mpesa.paybill} &bull; Account {site.mpesa.account}
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
