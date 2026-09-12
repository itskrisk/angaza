import { PhotoGrid } from '@/components/gallery/PhotoGrid';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function GalleryPage() {
  return (
    <>
      <section className="bg-white border-b border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="col-span-12 lg:col-span-7">
              <p className="eyebrow text-gray-500 mb-4">Field Archives</p>
              <h1 className="display-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-black uppercase">
                The route, in human frames.
              </h1>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-xl text-black font-normal leading-relaxed">
                Direct evidence from drop-off locations across Nairobi, Machakos, Kisumu, and Eldoret. Every image represents a verified handoff.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] border-b border-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <Reveal as="div">
            <PhotoGrid photos={site.photos} />
          </Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-black pt-6 text-xs font-semibold uppercase tracking-wider text-gray-600 gap-4">
            <p>Authentic local photographs from ANGAZA field operations.</p>
            <p>Archive updated {site.updated}</p>
          </div>
        </div>
      </section>
    </>
  );
}

