import { Link } from 'react-router-dom';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

const workStreams = [
  {
    number: '01',
    title: "Children's Homes & School Support",
    body: "We collect and deliver exercise books, textbooks, uniform sweaters, shoes, and sports equipment directly to registered children's homes and grassroots primary schools.",
    metricLabel: 'homes & schools supported',
    metricValue: 28,
    image: '/images/OneHope--Benin2013.jpg',
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
    location: 'Kisumu & Eldoret, Kenya',
    date: '02 September 2026',
  },
];

export function OurWorkPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">How INK CHARITY Operates</p>
            <h1
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Direct outreach.<br />
              <span style={{ color: '#bbb' }}>Real care.</span>
            </h1>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-8" delay={100}>
            <p className="text-[18px] text-black font-normal leading-relaxed max-w-lg">
              Three clear workstreams delivering essential clothing, learning supplies, and food care where it matters.
            </p>
            <Link
              to="/donate"
              className="self-start inline-flex items-center justify-center bg-black text-white text-[13px] font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-[#222] transition-colors duration-200"
            >
              Support a Center Today
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Workstreams ── */}
      <section className="bg-white">
        <div className="border-b border-[#e8e8e8] px-6 lg:px-14 py-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Active Workstreams</span>
        </div>

        {workStreams.map((stream, index) => (
          <Reveal
            as="article"
            key={stream.title}
            delay={index * 60}
            className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#e8e8e8]"
          >
            {/* Image — alternates sides */}
            <div className={`relative min-h-[280px] sm:min-h-[360px] overflow-hidden ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <img
                src={stream.image}
                alt={stream.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Location tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-5 py-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/60">{stream.location} · {stream.date}</p>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 lg:px-14 py-12 lg:py-16 flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#aaa]">{stream.number}</span>
                  <span className="flex-1 h-px bg-[#e8e8e8]" />
                </div>
                <h2
                  className="font-black text-black leading-[0.92] tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
                >
                  {stream.title}
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#555] leading-relaxed font-normal max-w-md">
                  {stream.body}
                </p>
              </div>

              {/* Counter */}
              <div className="flex flex-col gap-1 border-t border-[#e8e8e8] pt-8">
                <Counter
                  className="font-black text-black leading-none tracking-[-0.04em] text-[3.5rem]"
                  decimals={0}
                  label={stream.metricLabel}
                  value={stream.metricValue}
                />
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#aaa]">
                  {stream.metricLabel}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── Transparency CTA ── */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center gap-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">Field Transparency</p>
            <h2
              className="font-black text-white leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              Every delivery<br />
              <span className="text-white/30">is verified on site.</span>
            </h2>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-8" delay={100}>
            <p className="text-[17px] text-white/60 font-normal leading-relaxed max-w-lg">
              Every drop of clothing, books, and food is logged with photos, recipient home signatures, and published reports.
            </p>
            <Link
              to="/reports"
              className="self-start inline-flex items-center justify-center border border-white text-white text-[13px] font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-white hover:text-black transition-colors duration-200"
            >
              View Financial Reports
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
