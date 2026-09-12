import type { Photo } from '@/types';

export function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo) => (
        <figure className="photo-frame aspect-[4/3] border border-black" key={photo.src}>
          <img alt={photo.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" src={photo.src} />
          <figcaption className="photo-caption font-medium">
            <span className="font-bold uppercase tracking-wider">{photo.location}</span>
            <br />
            {photo.caption}
            <br />
            <span className="text-gray-300 text-xs">{photo.date}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

