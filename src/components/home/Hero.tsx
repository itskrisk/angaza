import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#e5e5e7]">
      {/* Background subtle Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Primary Headline & Narrative */}
          <Reveal as="div" className="lg:col-span-7 space-y-8">
            <h1 className="display-heading text-[clamp(2.75rem,7.5vw,5.5rem)] font-bold text-black leading-[0.96] tracking-tight">
              Direct community care.<br />
              <span className="text-[#86868b]">Where it matters most.</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#3a3a3c] leading-relaxed max-w-xl font-normal">
              <span className="font-bold text-black">INK CHARITY</span> delivers hands-on assistance to children's homes, grassroots primary schools, and senior care facilities across Kenya. From exercise books and footwear to warm clothing and essential food kits, every delivery is verified on site.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/donate" variant="accent" className="h-12 px-7 text-[14px] font-bold">
                Support A Home or School &rarr;
              </Button>
              <Button href="/our-work" variant="ghost" className="h-12 px-6 text-[14px] font-semibold border-[#d1d1d6]">
                Explore Our Field Work
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-medium text-[#86868b] border-t border-[#f0f0f2]">
              <span className="flex items-center gap-1.5"><span className="text-black font-bold">✓</span> Children's Homes</span>
              <span className="flex items-center gap-1.5"><span className="text-black font-bold">✓</span> Grassroots Schools</span>
              <span className="flex items-center gap-1.5"><span className="text-black font-bold">✓</span> Senior Citizen Care</span>
            </div>
          </Reveal>

          {/* Right: Live Impact Card & Verified Photo */}
          <Reveal as="div" className="lg:col-span-5 space-y-6" delay={150}>

            {/* Impact Metric Box */}
            <div className="border border-black bg-[#f5f5f7] p-6 space-y-4 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center justify-between border-b border-[#d1d1d6] pb-3">
                <p className="eyebrow text-black font-bold">Verified Field Impact</p>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-black bg-white border border-black px-2 py-0.5">Active</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Counter
                    className="text-[2.5rem] sm:text-[3rem] font-bold text-black tracking-tight number-display"
                    decimals={0}
                    label="Children's homes supported"
                    value={site.impactMetrics[0].value}
                  />
                  <p className="text-[12px] font-medium text-[#6e6e73]">Children's homes</p>
                </div>
                <div>
                  <Counter
                    className="text-[2.5rem] sm:text-[3rem] font-bold text-black tracking-tight number-display"
                    decimals={0}
                    label="Grassroots schools visited"
                    value={site.impactMetrics[1].value}
                  />
                  <p className="text-[12px] font-medium text-[#6e6e73]">Primary schools</p>
                </div>
              </div>

              <div className="border-t border-[#d1d1d6] pt-3 flex items-center justify-between text-[12px] font-semibold text-black">
                <span>Direct M-Pesa Paybill: <strong className="underline">{site.mpesa.paybill}</strong></span>
                <span>Account: <strong className="underline">{site.mpesa.account}</strong></span>
              </div>
            </div>

            {/* Photo Frame */}
            <div className="photo-frame aspect-[16/10] border border-black shadow-[4px_4px_0px_0px_#000]">
              <img
                alt="Children receiving school supplies at Mully Children Home, Machakos"
                src="/images/v.jpg"
              />
              <div className="photo-caption">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Mully Children Home, Machakos</span>
                <br />
                <span className="text-[#cccccc]">Direct delivery of clothing, shoes, and learning items</span>
              </div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
