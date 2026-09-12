import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#e5e5e7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Headline */}
          <Reveal as="div" className="lg:col-span-7 space-y-7">
            <p className="eyebrow">Nairobi &bull; Kisumu &bull; Kibera &bull; Eldoret</p>
            <h1 className="display-heading text-[clamp(3rem,9vw,6.5rem)] font-bold text-black leading-[0.95]">
              We move food<br />
              <span className="text-[#aeaeb2]">to people.</span>
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#3a3a3c] leading-relaxed max-w-lg font-normal">
              A surplus lunch in Karen becomes a warm meal in Kibera before evening. No long approvals. Just a WhatsApp, a van, and a verified delivery. That is <span className="font-angaza">ANGAZA</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/donate" variant="accent">
                Give via M-Pesa
              </Button>
              <Button href="/our-work" variant="ghost">
                See How It Works
              </Button>
            </div>
          </Reveal>

          {/* Right: Metric + Photo */}
          <Reveal as="div" className="lg:col-span-5 space-y-5" delay={150}>
            {/* Live metric */}
            <div className="border border-[#e5e5e7] bg-[#f5f5f7] p-5 sm:p-6 space-y-2">
              <p className="eyebrow">This month</p>
              <div className="flex items-end gap-2 flex-wrap">
                <Counter
                  className="text-[3rem] sm:text-[3.75rem] font-bold text-black tracking-tight number-display"
                  decimals={0}
                  label="Meals served this month"
                  value={2347}
                />
                <span className="text-[#6e6e73] text-[15px] pb-1 font-medium">meals served</span>
              </div>
              <p className="text-[11px] font-medium text-[#aeaeb2] uppercase tracking-wider pt-1">
                Paybill 522552 &bull; Account ANGAZA
              </p>
            </div>

            {/* Photo */}
            <div className="photo-frame aspect-[16/10]">
              <img
                alt="Children at Mully Children Home, Machakos"
                src="/src/images/v.jpg"
              />
              <div className="photo-caption">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Mully Children Home, Machakos</span>
                <br />
                <span className="text-[#cccccc]">Direct food handoff, September 2026</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
