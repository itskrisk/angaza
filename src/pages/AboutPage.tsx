import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-[#e5e5e7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="lg:col-span-7">
              <p className="eyebrow mb-4">About INK CHARITY</p>
              <h1 className="display-heading text-[clamp(2.25rem,7vw,5rem)] font-bold text-black">
                Grounded in community.<br />Driven by direct field care.
              </h1>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-[18px] text-black font-normal leading-relaxed">
                INK CHARITY is a hands-on outreach initiative designed to deliver practical human support where it is needed most.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                We deliver clothing, learning books, warm meals, and daily essentials directly to children's homes, elderly care centers, and grassroots schools across Kenya.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who We Are & Organizational Backing */}
      <section className="bg-white border-b border-[#e5e5e7] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Reveal as="div" className="lg:col-span-5 space-y-3">
              <p className="eyebrow">Official Partnerships</p>
              <h2 className="display-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-black">
                Our Operational Partners
              </h2>
              <p className="text-[15px] text-[#515154] leading-relaxed font-normal pt-2">
                INK CHARITY works hand-in-hand with our key partners to deliver leadership, resources, and field logistics to communities across Kenya.
              </p>
            </Reveal>
            <Reveal as="div" className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4" delay={100}>
              <div className="border border-black bg-[#f9f9fb] p-6 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-black">Coaching &amp; Leadership Partner</p>
                <h3 className="text-xl font-bold text-black">
                  <a href="https://inkcoaching.co.ke/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                    inkcoaching.co.ke <span className="text-sm">↗</span>
                  </a>
                </h3>
                <p className="text-[14px] text-[#515154] leading-relaxed font-normal">
                  Provides strategic direction, leadership coaching, and community engagement guidance for our outreach programs.
                </p>
              </div>

              <div className="border border-black bg-[#f9f9fb] p-6 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-black">Humanitarian &amp; Logistics Partner</p>
                <h3 className="text-xl font-bold text-black">Godia Humanitarian Services</h3>
                <p className="text-[14px] text-[#515154] leading-relaxed font-normal">
                  Coordinates vehicle dispatch, field manifests, drop-off verification, and humanitarian logistics across homes and schools.
                </p>
              </div>

              <div className="border border-black bg-[#f9f9fb] p-6 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-black">Technology &amp; Systems Partner</p>
                <h3 className="text-xl font-bold text-black">Muncheez Technologies Ltd</h3>
                <p className="text-[14px] text-[#515154] leading-relaxed font-normal">
                  Powers digital tracking systems, ledger transparency tooling, and field communication infrastructure for distribution routes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f5f5f7] border-b border-[#e5e5e7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="border-b border-[#e5e5e7] pb-6 mb-12">
            <p className="eyebrow mb-2">Operations &amp; Field Team</p>
            <h2 className="display-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-black">
              The team making direct visits happen.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.teamMembers.map((person, index) => (
              <Reveal as="article" className="bg-white border border-[#e5e5e7] p-6 space-y-5" delay={index * 80} key={person.name}>
                <div className="photo-frame aspect-[4/3]">
                  <img alt={person.name} loading="lazy" src={person.image} />
                  <div className="photo-caption font-medium">
                    {person.name}
                    <br />
                    <span className="text-[#aeaeb2] text-[11px] font-normal">Nairobi, Kenya</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-black">{person.name}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#aeaeb2] mt-1">{person.role}</p>
                  <p className="text-[14px] text-[#6e6e73] mt-3 leading-relaxed font-normal">{person.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal as="div" className="lg:col-span-6 space-y-4">
              <p className="eyebrow">Operating Philosophy</p>
              <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-black">
                Urgent need on one side.<br />Direct care on the other.
              </h2>
            </Reveal>
            <Reveal as="div" className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-[17px] text-black font-normal leading-relaxed">
                Children in homes and grassroots schools need practical tools: uniform sweaters, books, shoes, and decent meals. Elderly care facilities need bedding, personal care supplies, and steady support.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                We manage short, direct distribution routes that get items from donors straight to local directors and children with full accountability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
