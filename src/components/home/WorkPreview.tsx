import { Link } from 'react-router-dom';
import { site } from '@/config/site';

export function WorkPreview() {
  return (
    <section className="bg-[#f8f8f6] border-t border-[#e8e8e8]">

      {/* Header bar */}
      <div className="border-b border-[#e0e0e0] px-6 lg:px-12 py-3 flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">
          From the Field
        </span>
        <Link
          to="/gallery"
          className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-black hover:text-[#777] transition-colors"
        >
          Full Gallery ({site.photos.length}) →
        </Link>
      </div>

      {/* Horizontal scroll photo strip */}
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 px-6 lg:px-12 py-8 w-max">
          {site.photos.slice(3, 11).map((photo, i) => (
            <Link to="/gallery" key={i} className="group shrink-0 flex flex-col gap-3 w-[260px] sm:w-[300px]">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#aaa]">
                  {photo.location} · {photo.date}
                </p>
                <p className="text-[14px] font-semibold text-black mt-1 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
