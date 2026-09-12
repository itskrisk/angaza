'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { site } from '@/config/site';

gsap.registerPlugin(ScrollTrigger);

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !mediaRef.current) return;

    const context = gsap.context(() => {
      if (mediaRef.current && sectionRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { yPercent: 3 },
          {
            yPercent: -3,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#0a0a0a] text-white border-b border-[#1c1c1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">

          <Reveal as="div" className="col-span-12 lg:col-span-6 space-y-8">
            <p className="eyebrow text-[#6e6e73]">A Real Story</p>
            <blockquote className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight text-white leading-tight">
              {site.story.quote}
            </blockquote>
            <p className="text-[17px] text-[#aeaeb2] leading-relaxed font-normal max-w-lg">
              {site.story.body}
            </p>
            <div className="pt-6 border-t border-[#2c2c2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#6e6e73]">
                {site.story.location} &bull; {site.story.date}
              </span>
              <Button
                href="/our-work"
                variant="ghost"
                className="!border-[#3a3a3c] !text-white hover:!bg-[#1c1c1e]"
              >
                How We Operate &rarr;
              </Button>
            </div>
          </Reveal>

          <Reveal as="div" className="col-span-12 lg:col-span-6" delay={120}>
            <div ref={mediaRef} className="photo-frame aspect-[4/3]">
              <img
                alt="Children playing in Kibera after a meal delivery"
                src="/src/images/b.jpg"
              />
              <div className="photo-caption">
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  {site.story.location}
                </span>
                <br />
                <span className="text-[#cccccc]">{site.story.date}</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
