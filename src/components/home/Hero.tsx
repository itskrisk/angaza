import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { Counter } from '@/components/ui/Counter';

export function Hero() {
  return (
    <section className="bg-white flex flex-col">

      {/* TOP: Full-width giant headline */}
      <div className="px-6 lg:px-14 pt-14 pb-10 border-b border-[#e8e8e8]">
        <h1
          className="font-black leading-[0.88] tracking-[-0.04em] text-black"
          style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
        >
          We show{' '}
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #0a0a0a' }}>
            up.
          </span>
        </h1>
      </div>

      {/* BOTTOM: Image left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Image + stats bar */}
        <div className="relative min-h-[320px] lg:min-h-[460px] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#e8e8e8]">
          <img
            src="/images/Makes my heart smile_.jpg"
            alt="Children smiling in new clothes — INK CHARITY Kenya"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Stats pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/85 backdrop-blur-sm px-6 py-5 flex items-center justify-between gap-4">
            <div className="text-center">
              <Counter
                className="text-white font-black text-[2.25rem] leading-none"
                decimals={0}
                label="Children's homes"
                suffix="+"
                value={site.impactMetrics[0].value}
              />
              <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest mt-1">Children's homes</p>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div className="text-center">
              <Counter
                className="text-white font-black text-[2.25rem] leading-none"
                decimals={0}
                label="Primary schools"
                suffix="+"
                value={site.impactMetrics[1].value}
              />
              <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest mt-1">Primary schools</p>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div className="text-center">
              <Counter
                className="text-white font-black text-[2.25rem] leading-none"
                decimals={0}
                label="Care centers"
                suffix="+"
                value={site.impactMetrics[2].value}
              />
              <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest mt-1">Care centers</p>
            </div>
          </div>
        </div>

        {/* Right: Description + buttons */}
        <div className="flex flex-col justify-between px-6 lg:px-14 py-12 lg:py-16 gap-12">
          <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#555] font-normal max-w-lg">
            Clothes, food, books, and essential care — delivered directly to children's homes, primary schools, and senior care facilities across Kenya.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center bg-black text-white text-[13px] font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-[#222] transition-colors duration-200"
            >
              Support Us
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center justify-center border border-black text-black text-[13px] font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
            >
              Our Field Work
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
