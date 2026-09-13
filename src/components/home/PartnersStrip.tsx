import { Reveal } from '@/components/ui/Reveal';

export const partners = [
  {
    name: 'inkcoaching.co.ke',
    category: 'Coaching & Leadership Partner',
    link: 'https://inkcoaching.co.ke/',
    external: true,
  },
  {
    name: 'Godia Humanitarian Services',
    category: 'Humanitarian & Field Operations',
    link: null,
    external: false,
  },
  {
    name: 'Muncheez Technologies Ltd',
    category: 'Technology & Logistics Partner',
    link: null,
    external: false,
  },
] as const;

export function PartnersStrip() {
  return (
    <section className="border-b border-[#e5e5e7] bg-[#f9f9fb] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="shrink-0">
            <p className="eyebrow text-[#86868b]">Operational Partners</p>
            <p className="text-[13px] font-medium text-black mt-0.5">Collaborating for direct impact</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full md:max-w-4xl">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group border border-[#e5e5e7] bg-white p-4 transition-all duration-200 hover:border-black hover:shadow-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#86868b] group-hover:text-black transition-colors">
                  {partner.category}
                </p>
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-[15px] font-bold text-black hover:underline flex items-center justify-between"
                  >
                    <span>{partner.name}</span>
                    <span className="text-xs text-[#86868b] group-hover:text-black">↗</span>
                  </a>
                ) : (
                  <p className="mt-1 text-[15px] font-bold text-black">{partner.name}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
