import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

const breakdown = [
  { label: 'Children\'s Homes & School Support (Books, Uniforms, Supplies)', value: '45%' },
  { label: 'Elderly Care & Community Clothes/Food Distribution', value: '35%' },
  { label: 'Field Transport & Vehicle Fuel Logistics', value: '14%' },
  { label: 'Record Verification & Administration', value: '6%' },
];

export function ReportsPage() {
  return (
    <>
      <section className="bg-white border-b border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="col-span-12 lg:col-span-7">
              <p className="eyebrow text-gray-500 mb-4">Financial Audit &amp; Field Records</p>
              <h1 className="display-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-black uppercase">
                Where every shilling went.
              </h1>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-xl text-black font-normal leading-relaxed">
                Full transparency across clothing drives, educational supplies, food distributions, and operational field costs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] border-b border-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-8">
            
            <Reveal as="div" className="col-span-12 lg:col-span-5 space-y-6">
              <p className="eyebrow text-black">Resource Allocation</p>
              <h2 className="display-heading text-3xl sm:text-5xl font-bold text-black">Every shilling has a task.</h2>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Percentages represent active operational expenditure for the 2026 reporting period across all children's homes, schools, and elderly centers.
              </p>
            </Reveal>

            <Reveal as="div" className="col-span-12 lg:col-span-7 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={100}>
              <div className="space-y-6">
                {breakdown.map((item) => (
                  <div className="border-b border-black pb-4 space-y-2" key={item.label}>
                    <div className="flex justify-between items-center text-base font-bold text-black">
                      <span>{item.label}</span>
                      <span className="text-2xl font-bold tracking-tight">{item.value}</span>
                    </div>
                    <div className="h-2 bg-gray-200 w-full border border-black">
                      <div className="h-full bg-black" style={{ width: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Reporting Period: Jan 2026 to Sept 2026 • Verified Records
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-8 items-center">
            <Reveal as="div" className="col-span-12 lg:col-span-7 space-y-4">
              <p className="eyebrow text-gray-400">Ledger Requests</p>
              <h2 className="display-heading text-4xl sm:text-6xl font-bold text-white">Full audit pack available.</h2>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-800 pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
              <p className="text-lg text-gray-300 font-normal leading-relaxed">
                Institutional partners and individual donors can request our complete financial documentation anytime.
              </p>
              <a className="inline-flex min-h-[3rem] items-center justify-center border border-white bg-white text-black px-6 text-sm font-bold uppercase tracking-wider hover:bg-gray-200" href={`mailto:${site.mpesa.email}`}>
                Request Financial Pack <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
