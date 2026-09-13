'use client';

import { Link } from 'react-router-dom';
import { site } from '@/config/site';

export function StorySection() {
  return (
    <section className="bg-white border-t border-[#e8e8e8]">

      {/* Section header bar */}
      <div className="border-b border-[#e8e8e8] px-6 lg:px-12 py-3 flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">
          A Real Story
        </span>
        <span className="text-[11px] font-mono text-[#aaa]">
          {site.story.location} · {site.story.date}
        </span>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Quote + body */}
        <div className="px-6 lg:px-12 py-14 lg:py-20 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-[#e8e8e8]">
          <div className="space-y-6">
            {/* Pull quote */}
            <blockquote
              className="font-bold text-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)' }}
            >
              {site.story.quote}
            </blockquote>

            <p className="text-[16px] leading-relaxed text-[#555] max-w-lg font-normal">
              {site.story.body}
            </p>
          </div>

          <Link
            to="/our-work"
            className="self-start inline-flex items-center gap-3 text-[12px] font-mono font-bold uppercase tracking-[0.18em] text-black border-b border-black pb-0.5 hover:text-[#555] hover:border-[#555] transition-colors"
          >
            How We Operate →
          </Link>
        </div>

        {/* Right: Full-bleed image */}
        <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden">
          <img
            src={site.story.image}
            alt="Volunteers at Machakos Children Home"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Bottom gradient label */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">
              {site.story.location}
            </p>
          </div>
        </div>

      </div>

      {/* Three-image horizontal band */}
      <div className="grid grid-cols-3 border-t border-[#e8e8e8]">
        {site.photos.slice(0, 3).map((photo, i) => (
          <div key={i} className={`relative aspect-[4/3] overflow-hidden ${i < 2 ? 'border-r border-[#e8e8e8]' : ''}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
