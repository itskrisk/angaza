import { site } from '@/config/site';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

export function ImpactStrip() {
  return (
    <section aria-labelledby="impact-title" className="bg-[#f5f5f7] border-b border-[#e5e5e7] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">

          <Reveal as="div" className="col-span-12 lg:col-span-4 space-y-5">
            <p className="eyebrow">Impact to Date</p>
            <h2
              className="display-heading text-[clamp(2rem,4vw,3rem)] font-bold text-black"
              id="impact-title"
            >
              Numbers we publish<br />every single week.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#6e6e73] font-normal">
              Every number here comes from a signed manifest. A volunteer records it. A kitchen lead confirms it. We publish it. That is the whole system.
            </p>
          </Reveal>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 border-t border-l border-[#e5e5e7]">
            {site.impactMetrics.map((metric, index) => (
              <Reveal
                as="div"
                className="flex min-h-[10rem] flex-col justify-between border-b border-r border-[#e5e5e7] p-7 bg-white"
                delay={index * 80}
                key={metric.label}
              >
                <p className="text-[12px] font-semibold text-[#aeaeb2] uppercase tracking-wider">{metric.label}</p>
                <Counter
                  className="mt-4 text-[2.75rem] sm:text-[3.25rem] font-bold tracking-tight text-black number-display"
                  decimals={metric.decimals}
                  label={metric.label}
                  suffix={metric.suffix}
                  value={metric.value}
                />
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
