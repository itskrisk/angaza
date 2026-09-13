import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function GalleryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Field Archives</p>
            <h1
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              The route,<br />
              <span style={{ color: '#bbb' }}>in frames.</span>
            </h1>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-4" delay={100}>
            <p className="text-[18px] text-black font-normal leading-relaxed max-w-lg">
              Direct evidence from drop-off locations across Nairobi, Machakos, Kisumu, and Eldoret. Every image represents a verified handoff.
            </p>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">
              {site.photos.length} photographs · Archive updated {site.updated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Masonry-style grid ── */}
      <section className="bg-[#f8f8f6] border-b border-[#e8e8e8] py-10 lg:py-14">
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {site.photos.map((photo, i) => (
              <Reveal
                as="div"
                key={photo.src}
                delay={i * 30}
                className="break-inside-avoid relative overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-3 w-full">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/70">{photo.location}</p>
                    <p className="text-[12px] font-semibold text-white leading-snug mt-0.5">{photo.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-[#e0e0e0] pt-5 text-[10px] font-mono uppercase tracking-widest text-[#aaa]">
            <span>Authentic field photographs — INK CHARITY Kenya</span>
            <span>Updated {site.updated}</span>
          </div>
        </div>
      </section>
    </>
  );
}
