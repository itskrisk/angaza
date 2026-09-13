import { site } from '@/config/site';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

export function ImpactStrip() {
  return (
    <section aria-labelledby="impact-title" className="bg-[#f5f5f7] border-b border-[#e5e5e7] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Heading & Context */}
          <Reveal as="div" className="lg:col-span-4 space-y-4 sm:space-y-5">
            <p className="eyebrow text-[#86868b]">Impact to Date</p>
            <h2
              className="display-heading text-[clamp(1.85rem,5vw,3rem)] font-bold text-black leading-tight"
              id="impact-title"
            >
              Numbers we publish<br className="hidden sm:inline" /> every single week.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#515154] font-normal">
              Every metric here represents direct deliveries of clothes, food, books, and essential items to children's homes, schools, and elderly care centers across Kenya.
            </p>
          </Reveal>

          {/* Right Column: Mobile-First Responsive Metric Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {site.impactMetrics.map((metric, index) => (
              <Reveal
                as="div"
                className="flex min-h-[9.5rem] flex-col justify-between border border-[#e5e5e7] bg-white p-5 sm:p-7 shadow-sm transition-shadow duration-200 hover:shadow-md"
                delay={index * 80}
                key={metric.label}
              >
                <p className="text-[11px] sm:text-[12px] font-bold text-[#86868b] uppercase tracking-wider leading-snug">
                  {metric.label}
                </p>
                <div className="mt-3 flex items-baseline flex-wrap gap-x-2">
                  <Counter
                    className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight text-black leading-none number-display"
                    decimals={metric.decimals}
                    label={metric.label}
                    suffix={metric.suffix}
                    value={metric.value}
                  />
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
