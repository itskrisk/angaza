import { Link } from 'react-router-dom';
import { site } from '@/config/site';

export function FinalCTA() {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden">

      {/* Background image with strong overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/OneHope--Benin2013.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 border-b border-white/10 px-6 lg:px-12 py-3 flex items-center gap-3">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">
          Support INK CHARITY
        </span>
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-32 flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">

        {/* Giant headline */}
        <div className="flex-1">
          <h2
            className="font-black text-white leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            Give<br />
            directly.<br />
            <span className="text-white/30">Today.</span>
          </h2>
        </div>

        {/* Right side: description + actions */}
        <div className="lg:max-w-md xl:max-w-lg space-y-8">
          <p className="text-[17px] leading-relaxed text-white/60 font-normal">
            Whether M-Pesa, clothes, books, or food — every contribution goes straight to a verified children's home, school, or elderly care center. No admin overhead. Just fieldwork.
          </p>

          <div className="space-y-3">
            <Link
              to="/donate"
              className="flex items-center justify-center w-full sm:w-auto sm:inline-flex gap-2 bg-white text-black text-[13px] font-black uppercase tracking-[0.15em] px-10 py-5 hover:bg-white/90 transition-colors"
            >
              Support INK CHARITY →
            </Link>

            {/* M-Pesa pill */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">
                Paybill {site.mpesa.paybill} · Acc: {site.mpesa.account}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
