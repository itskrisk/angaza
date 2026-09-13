import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

const workStreams = [
  {
    number: '01',
    title: 'Children\'s Homes & School Support',
    body: 'We collect and deliver exercise books, textbooks, uniform sweaters, shoes, and sports equipment directly to registered children\'s homes and grassroots primary schools.',
    metricLabel: 'homes & schools supported',
    metricValue: 28,
    image: '/images/OneHope--Benin2013.jpg',
    caption: 'Direct delivery of educational textbooks and school supplies.',
    location: 'Machakos & Nairobi, Kenya',
    date: '08 September 2026',
  },
  {
    number: '02',
    title: 'Elderly Homes & Special Care',
    body: 'We support elderly care centers and vulnerable seniors with warm clothing, blankets, hygiene items, and nutritional packs so elderly citizens live in comfort.',
    metricLabel: 'clothing & care packages',
    metricValue: 1450,
    image: '/images/Circle of Life.jpg',
    caption: 'Community distribution circle after receiving care packages.',
    location: 'Kibera & Coast Region',
    date: '05 September 2026',
  },
  {
    number: '03',
    title: 'Food Rations & In-Kind Giving',
    body: 'We coordinate direct donation drop-offs and vehicle pickups for food, clothing, and household goods, supported by Godia Humanitarian Services and inkcoaching.co.ke.',
    metricLabel: 'active field volunteers',
    metricValue: 65,
    image: '/images/Custom Ink Fundraising.jpg',
    caption: 'Youth leaders coordinating supply logistics and item collection.',
    location: 'Kisumu & Eldoret, Kenya',
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
              <p className="eyebrow mb-4">How INK CHARITY Operates</p>
              <h1 className="display-heading text-[clamp(2.5rem,8vw,5.5rem)] font-bold text-black">
                Direct outreach.<br />Real care in homes &amp; schools.
              </h1>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
              <p className="text-[17px] text-black font-normal leading-relaxed">
                Three clear workstreams delivering essential clothing, learning supplies, and food care where it matters.
              </p>
              <Button href="/donate" variant="accent">
                Support a Center Today →
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
                    <p className="eyebrow">Impact Count</p>
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
              <p className="eyebrow text-[#6e6e73]">Field Transparency</p>
              <h2 className="display-heading text-[clamp(2rem,5vw,3.75rem)] font-bold text-white">
                Every delivery is verified on site.
              </h2>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#2c2c2e] pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
              <p className="text-[17px] text-[#aeaeb2] font-normal leading-relaxed">
                Every drop of clothing, books, and food is logged with photos, recipient home signatures, and published reports.
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
