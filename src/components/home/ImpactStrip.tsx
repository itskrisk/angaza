import { site } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';

export function ImpactStrip() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      {/* Top label bar */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-3 flex items-center gap-3">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
        <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
          Impact to date — updated weekly
        </span>
      </div>

      {/* Metric grid — 4 across on desktop, 2x2 on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/10 border-b border-white/10">
        {site.impactMetrics.map((metric, i) => (
          <Reveal
            as="div"
            key={metric.label}
            delay={i * 60}
            className="px-8 py-12 lg:py-16 flex flex-col gap-3"
          >
            <Counter
              className="font-black text-white leading-none tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' } as React.CSSProperties}
              decimals={0}
              label={metric.label}
              value={metric.value}
            />
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/35 leading-relaxed">
              {metric.label}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Bottom caption strip */}
      <div className="px-6 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] font-mono text-white/25 uppercase tracking-wider">
        <span>All figures represent verified on-site deliveries</span>
        <span>Kenya · Est. 2024</span>
      </div>
    </section>
  );
}
