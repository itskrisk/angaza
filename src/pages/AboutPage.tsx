import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';
import { Link } from 'react-router-dom';

const partners = [
  {
    logo: '/images/LOGO/inkcoachinglogo.png',
    role: 'Coaching & Leadership Partner',
    name: 'inkcoaching.co.ke',
    href: 'https://inkcoaching.co.ke/',
    description:
      'Provides strategic direction, leadership coaching, and community engagement guidance for our outreach programs.',
  },
  {
    logo: '/images/LOGO/godialogo.png',
    role: 'Humanitarian & Logistics Partner',
    name: 'Godia Humanitarian Services',
    href: null,
    description:
      'Coordinates vehicle dispatch, field manifests, drop-off verification, and humanitarian logistics across homes and schools.',
  },
  {
    logo: '/images/LOGO/muncheezlogo.png',
    role: 'Technology & Systems Partner',
    name: 'Muncheez Technologies Ltd',
    href: null,
    description:
      'Powers digital tracking systems, ledger transparency tooling, and field communication infrastructure for distribution routes.',
  },
];

export function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: headline */}
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-6">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#bbb]">About INK CHARITY</p>
            <h1
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Grounded<br />
              in community.
            </h1>
          </div>

          {/* Right: description */}
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-6" delay={100}>
            <p className="text-[18px] sm:text-[20px] text-black font-normal leading-relaxed">
              INK CHARITY is a hands-on outreach initiative designed to deliver practical human support where it is needed most.
            </p>
            <p className="text-[15px] text-[#555] leading-relaxed font-normal">
              We deliver clothing, learning books, warm meals, and daily essentials directly to children's homes, elderly care centers, and grassroots schools across Kenya.
            </p>
            <Link
              to="/our-work"
              className="self-start text-[12px] font-mono font-bold uppercase tracking-[0.18em] text-black border-b border-black pb-0.5 hover:text-[#555] hover:border-[#555] transition-colors"
            >
              See Our Field Work →
            </Link>
          </Reveal>

        </div>
      </section>

      {/* ── Partners ── */}
      <section className="bg-white border-b border-[#e8e8e8]">

        {/* Section label */}
        <div className="border-b border-[#e8e8e8] px-6 lg:px-14 py-3 flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Official Partnerships</span>
        </div>

        <div className="px-6 lg:px-14 pt-10 pb-4">
          <h2
            className="font-black text-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Our Operational Partners
          </h2>
          <p className="mt-4 text-[15px] text-[#555] max-w-xl leading-relaxed">
            INK CHARITY works hand-in-hand with key partners to deliver leadership, resources, and field logistics to communities across Kenya.
          </p>
        </div>

        {/* Partner cards with logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#e8e8e8] mt-8">
          {partners.map((p, i) => (
            <Reveal
              as="div"
              key={p.name}
              delay={i * 80}
              className={`flex flex-col gap-6 p-8 lg:p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[#e8e8e8]' : ''}`}
            >
              {/* Logo */}
              <div className="h-12 flex items-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-full w-auto object-contain max-w-[160px]"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#aaa]">{p.role}</p>
                <h3 className="text-[17px] font-bold text-black leading-snug">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      {p.name} <span className="text-sm">↗</span>
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed font-normal">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-[#f8f8f6] border-b border-[#e8e8e8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">

          <div className="border-b border-[#e0e0e0] pb-8 mb-12">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa] mb-3">Operations & Field Team</p>
            <h2
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              The team making direct visits happen.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.teamMembers.map((person, index) => (
              <Reveal as="article" className="bg-white border border-[#e8e8e8] overflow-hidden" delay={index * 80} key={person.name}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={person.name}
                    loading="lazy"
                    src={person.image}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-[16px] font-bold text-black">{person.name}</h3>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#aaa]">{person.role}</p>
                  <p className="text-[13px] text-[#555] mt-2 leading-relaxed font-normal">{person.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          <div className="px-6 lg:px-14 pb-10 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Operating Philosophy</p>
            <h2
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Urgent need<br />on one side.<br />
              <span className="text-[#bbb]">Direct care on the other.</span>
            </h2>
          </div>

          <Reveal as="div" className="px-6 lg:px-14 pt-10 lg:pt-0 flex flex-col justify-center gap-5" delay={120}>
            <p className="text-[17px] text-black font-normal leading-relaxed">
              Children in homes and grassroots schools need practical tools: uniform sweaters, books, shoes, and decent meals. Elderly care facilities need bedding, personal care supplies, and steady support.
            </p>
            <p className="text-[15px] text-[#555] leading-relaxed font-normal">
              We manage short, direct distribution routes that get items from donors straight to local directors and children with full accountability.
            </p>
          </Reveal>

        </div>
      </section>
    </>
  );
}
