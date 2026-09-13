import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

const breakdown = [
  { label: "Children's Homes & School Support", sub: 'Books, uniforms, supplies', value: '45%', pct: 45 },
  { label: 'Elderly Care & Community Distribution', sub: 'Clothes, food, blankets', value: '35%', pct: 35 },
  { label: 'Field Transport & Logistics', sub: 'Vehicle fuel, routes', value: '14%', pct: 14 },
  { label: 'Record Verification & Admin', sub: 'Documentation, reporting', value: '6%', pct: 6 },
];

export function ReportsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Financial Audit & Field Records</p>
            <h1
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Where every<br />
              <span style={{ color: '#bbb' }}>shilling went.</span>
            </h1>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-4" delay={100}>
            <p className="text-[18px] text-black font-normal leading-relaxed max-w-lg">
              Full transparency across clothing drives, educational supplies, food distributions, and operational field costs.
            </p>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">
              Reporting period: Jan 2026 – Sept 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Allocation breakdown ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="border-b border-[#e8e8e8] px-6 lg:px-14 py-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Resource Allocation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: label */}
          <div className="px-6 lg:px-14 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-4">
            <h2
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Every shilling<br />has a task.
            </h2>
            <p className="text-[15px] text-[#555] leading-relaxed font-normal max-w-sm">
              Percentages represent active operational expenditure for the 2026 reporting period across all sites.
            </p>
          </div>

          {/* Right: breakdown rows */}
          <div className="flex flex-col divide-y divide-[#e8e8e8]">
            {breakdown.map((item, i) => (
              <Reveal as="div" key={item.label} delay={i * 60} className="px-6 lg:px-10 py-7 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[14px] font-bold text-black leading-snug">{item.label}</p>
                    <p className="text-[11px] font-mono text-[#aaa] uppercase tracking-wider mt-0.5">{item.sub}</p>
                  </div>
                  <span className="font-black text-black text-[2rem] leading-none tracking-tight shrink-0">{item.value}</span>
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-[#f0f0f0] w-full overflow-hidden">
                  <div className="h-full bg-black transition-all duration-700" style={{ width: item.value }} />
                </div>
              </Reveal>
            ))}
            <div className="px-6 lg:px-10 py-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#aaa]">
                Verified field records · Jan 2026 – Sept 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audit request CTA ── */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center gap-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">Ledger Requests</p>
            <h2
              className="font-black text-white leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              Full audit pack<br />
              <span className="text-white/30">available.</span>
            </h2>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-8" delay={100}>
            <p className="text-[17px] text-white/60 font-normal leading-relaxed max-w-lg">
              Institutional partners and individual donors can request our complete financial documentation anytime.
            </p>
            <a
              href={`mailto:${site.mpesa.email}`}
              className="self-start inline-flex items-center justify-center border border-white text-white text-[13px] font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Request Financial Pack →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
