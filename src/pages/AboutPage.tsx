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
              <p className="eyebrow mb-4">About ANGAZA</p>
              <h1 className="display-heading text-[clamp(2.25rem,7vw,5rem)] font-bold text-black">
                Started with a phone call and an empty table.
              </h1>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-[18px] text-black font-normal leading-relaxed">
                A wedding in Karen had food left over. A kitchen in Kibera had people waiting. Someone needed to connect the two. We are that someone.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                ANGAZA is a small Nairobi team with one operating rule: move what is useful, verify where it lands. The name means light. The work is direct field distribution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f5f5f7] border-b border-[#e5e5e7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="border-b border-[#e5e5e7] pb-6 mb-12">
            <p className="eyebrow mb-2">Operations Team</p>
            <h2 className="display-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-black">
              The people keeping the ledgers honest.
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
                Surplus on one side.<br />Hunger on the other.
              </h2>
            </Reveal>
            <Reveal as="div" className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-[17px] text-black font-normal leading-relaxed">
                Food does not need a slogan. It needs transport, a point of contact, and a published receipt. We built ANGAZA to make handoffs reliable and transparent.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                We are not here to market ourselves. We are here to make the transport route so direct that the only thing anyone remembers is that fresh meals arrived.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
