import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function WorkPreview() {
  return (
    <section className="bg-white py-24 border-b border-[#e5e5e7]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5e5e7] pb-10 mb-14">
          <div>
            <p className="eyebrow mb-3">From The Field</p>
            <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-black">
              Real moments.<br />Real handoffs.
            </h2>
          </div>
          <Link
            className="text-[13px] font-semibold uppercase tracking-wider text-black underline underline-offset-4 hover:text-[#6e6e73] transition-colors shrink-0"
            to="/gallery"
          >
            Full Gallery ({site.photos.length} photos) &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.photos.slice(10, 13).map((photo, index) => (
            <Reveal as="div" key={photo.src} delay={index * 90} className="space-y-4">
              <div className="photo-frame aspect-[4/3]">
                <img alt={photo.alt} src={photo.src} loading="lazy" />
                <div className="photo-caption">
                  <span className="font-semibold uppercase tracking-wider text-[11px]">{photo.location}</span>
                  <br />
                  <span className="text-[#cccccc]">{photo.caption}</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#aeaeb2]">
                  {photo.location} &bull; {photo.date}
                </p>
                <p className="text-[15px] font-medium text-black mt-1 leading-snug">{photo.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
