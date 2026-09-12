import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { Logo } from './Navigation';

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e7] bg-white text-black">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-14 lg:px-8 lg:py-20">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#e5e5e7]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <Logo />
            <p className="max-w-sm text-[15px] leading-relaxed text-[#6e6e73] font-normal">
              We are a small group of Kenyans connecting surplus food and care to communities that need it most. No overhead. No long approvals. Just direct, verified handoffs.
            </p>
            <p className="text-[11px] font-medium text-[#c7c7cc] uppercase tracking-wider">
              Nairobi, Kenya &bull; Est. {site.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#c7c7cc]">Pages</p>
            <ul className="space-y-2.5">
              {site.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-[14px] font-medium text-[#6e6e73] hover:text-black transition-colors duration-150"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Give Directly */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#c7c7cc]">Give Directly</p>
            <div className="space-y-2.5 text-[14px]">
              <div className="flex items-center justify-between border-b border-[#f5f5f7] pb-2.5">
                <span className="text-[#6e6e73]">M-Pesa Paybill</span>
                <span className="font-bold text-black">{site.mpesa.paybill}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#f5f5f7] pb-2.5">
                <span className="text-[#6e6e73]">Account Name</span>
                <span className="font-bold text-black">{site.mpesa.account}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#f5f5f7] pb-2.5">
                <span className="text-[#6e6e73]">Email</span>
                <a href={`mailto:${site.mpesa.email}`} className="font-medium text-black hover:underline">
                  {site.mpesa.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6e6e73]">WhatsApp</span>
                <a href="https://wa.me/254769032075" target="_blank" rel="noopener noreferrer" className="font-medium text-black hover:underline">
                  +254 769 032 075
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[12px] text-[#aeaeb2]">

          <p>&copy; {new Date().getFullYear()} ANGAZA Foundation. All rights reserved.</p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            {/* Page links */}
            <div className="flex gap-4">
              <Link className="hover:text-black transition-colors" to="/privacy">Privacy</Link>
              <Link className="hover:text-black transition-colors" to="/reports">Reports</Link>
              <Link className="hover:text-black transition-colors" to="/contact">Contact</Link>
            </div>

            <span className="hidden sm:block text-[#e5e5e7]">|</span>

            {/* Developer credit */}
            <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
              <span>Developed by</span>
              <a
                href="https://iamkris.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:underline"
              >
                Kris
              </a>
              <span className="text-[#e5e5e7]">&bull;</span>
              <a href="https://iamkris.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                iamkris.vercel.app
              </a>
              <span className="text-[#e5e5e7]">&bull;</span>
              <a href="tel:+254769032075" className="hover:text-black transition-colors">+254 769 032 075</a>
              <span className="text-[#e5e5e7]">/</span>
              <a href="tel:+905391338912" className="hover:text-black transition-colors">+90 539 133 8912</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
