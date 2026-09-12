import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

const workStreams = [
  {
    number: '01',
    title: 'Food Rescue Logistics',
    body: 'We collect fresh surplus food from events, markets, farms, and providers across Nairobi and Kisumu. Our team inspects, packages, and transports supplies directly to registered community kitchens.',
    metricLabel: 'meals moved last month',
    metricValue: 2347,
    image: '/src/images/v.jpg',
    caption: 'Direct delivery of rice and maize to Mully Children Home.',
    location: 'Mully Children Home, Machakos',
    date: '08 September 2026',
  },
  {
    number: '02',
    title: 'Direct Giving Route',
    body: 'We maintain zero unnecessary overhead. M-Pesa contributions instantly purchase fresh grain, cooking gas, and vegetables for community kitchens with digital ledger confirmation.',
    metricLabel: 'average gift (KES)',
    metricValue: 500,
    image: '/src/images/Circle of Life.jpg',
    caption: 'Community circle meeting after a Friday delivery.',
    location: 'Nairobi, Kenya',
    date: '05 September 2026',
  },
  {
    number: '03',
    title: 'Grassroots Coordination',
    body: 'Community kitchen leaders decide daily meal schedules. We handle transport logistics, fuel, and receipt tracking while local cooks prepare warm meals on the ground.',
    metricLabel: 'active field volunteers',
    metricValue: 89,
    image: '/src/images/k.jpg',
    caption: 'Youth leaders coordinating evening route stops.',
    location: 'Kisumu, Kenya',
    date: '02 September 2026',
  },
];

export function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-[#e5e5e7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="lg:col-span-7">
              <p className="eyebrow mb-4">How We Operate</p>
              <h1 className="display-heading text-[clamp(2.5rem,8vw,5.5rem)] font-bold text-black">
                Food moves.<br />People move with it.
              </h1>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
              <p className="text-[17px] text-black font-normal leading-relaxed">
                Three core logistics workstreams. Published numbers. Verified handoffs. Zero theatre.
              </p>
              <Button href="/donate" variant="accent">
                Support a Route Today →
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workstreams */}
      <section className="bg-[#f5f5f7] border-b border-[#e5e5e7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="border-b border-[#e5e5e7] pb-6 mb-12">
            <p className="eyebrow">Active Workstreams</p>
          </div>

          <div className="space-y-8">
            {workStreams.map((stream, index) => (
              <Reveal
                as="article"
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 border border-[#e5e5e7] p-6 sm:p-8 bg-white"
                delay={index * 60}
                key={stream.title}
              >
                <div className="lg:col-span-1">
                  <p className="eyebrow">{stream.number}</p>
                </div>
                <div className="lg:col-span-4 space-y-3">
                  <h2 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-black leading-tight">{stream.title}</h2>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">{stream.body}</p>
                </div>
                <div className="lg:col-span-4">
                  <div className="photo-frame aspect-[4/3]">
                    <img alt={stream.title} loading="lazy" src={stream.image} />
                    <div className="photo-caption">
                      <span className="font-semibold uppercase tracking-wider text-[11px]">{stream.location}</span>
                      <br />
                      <span className="text-[#cccccc]">{stream.caption}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between gap-4">
                  <div>
                    <p className="eyebrow">Live Indicator</p>
                    <p className="text-[13px] font-medium text-black mt-2">{stream.metricLabel}</p>
                  </div>
                  <Counter
                    className="text-[2.5rem] sm:text-[3rem] font-bold tracking-tight text-black number-display"
                    decimals={0}
                    label={stream.metricLabel}
                    value={stream.metricValue}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verification CTA */}
      <section className="bg-[#0a0a0a] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal as="div" className="lg:col-span-7 space-y-4">
              <p className="eyebrow text-[#6e6e73]">The Verification Standard</p>
              <h2 className="display-heading text-[clamp(2rem,5vw,3.75rem)] font-bold text-white">
                The handoff is the proof.
              </h2>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#2c2c2e] pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
              <p className="text-[17px] text-[#aeaeb2] font-normal leading-relaxed">
                We do not stop at collection. Every drop-off is recorded with photos, kitchen signatures, and digital receipts published monthly.
              </p>
              <Button href="/reports" variant="ghost" className="!border-[#3a3a3c] !text-white hover:!bg-[#1c1c1e]">
                View Financial Reports →
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
