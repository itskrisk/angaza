import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { Logo } from './Navigation';

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e7] bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* ── Top Corporate Assurance Bar ── */}
      <div className="border-b border-[#e5e5e7] bg-[#f9f9fb] py-3.5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#6e6e73]">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-black"></span>
            <span>INK CHARITY &bull; Institutional Compliance</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>Kenya Data Protection Act (2019) Compliant</span>
            <span className="hidden md:inline text-[#d1d1d6]">•</span>
            <span className="hidden md:inline">Itemized Field Ledger Audits</span>
            <span className="hidden md:inline text-[#d1d1d6]">•</span>
            <span>Child Safeguarding Enforced</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-14 lg:px-8 lg:py-18">

        {/* ── Main Corporate Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#e5e5e7]">

          {/* Col 1: Organization & Identity (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Logo />
            <p className="max-w-sm text-[14px] leading-relaxed text-[#515154] font-normal">
              INK CHARITY is a hands-on Kenyan charity initiative. We coordinate direct distributions of food, clothing, educational materials, and daily essentials straight to registered children's homes, elderly care centers, and primary schools.
            </p>
            <div className="pt-2 border-t border-[#f0f0f2] space-y-1.5 text-[12px] text-[#6e6e73]">
              <p><strong className="text-black font-semibold">Operational Partners:</strong> <a href="https://inkcoaching.co.ke/" target="_blank" rel="noopener noreferrer" className="font-bold text-black underline hover:text-[#6e6e73]">inkcoaching.co.ke &rarr;</a> &bull; Godia Humanitarian Services &bull; Muncheez Technologies Ltd</p>
              <p><strong className="text-black font-semibold">Regulatory Compliance:</strong> Kenya Data Protection Act 2019 registered data handling.</p>
            </div>
          </div>

          {/* Col 2: Core Focus Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">Focus Areas</p>
            <ul className="space-y-2.5 text-[14px] text-[#515154]">
              <li className="hover:text-black transition-colors">Children's Homes</li>
              <li className="hover:text-black transition-colors">Grassroots Schools</li>
              <li className="hover:text-black transition-colors">Senior Care Facilities</li>
              <li className="hover:text-black transition-colors">In-Kind Item Drives</li>
            </ul>
          </div>

          {/* Col 3: Corporate Governance & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">Governance &amp; Compliance</p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link className="text-[#515154] hover:text-black transition-colors flex items-center justify-between" to="/privacy">
                  <span>Data Protection Policy</span>
                  <span className="text-[11px] text-[#aeaeb2] uppercase font-semibold">Act 2019</span>
                </Link>
              </li>
              <li>
                <Link className="text-[#515154] hover:text-black transition-colors flex items-center justify-between" to="/reports">
                  <span>Financial Audit Ledger</span>
                  <span className="text-[11px] text-[#aeaeb2] uppercase font-semibold">Public</span>
                </Link>
              </li>
              <li>
                <Link className="text-[#515154] hover:text-black transition-colors flex items-center justify-between" to="/about">
                  <span>Child Safeguarding Standard</span>
                  <span className="text-[11px] text-[#aeaeb2] uppercase font-semibold">Enforced</span>
                </Link>
              </li>
              <li>
                <a className="text-[#515154] hover:text-black transition-colors flex items-center justify-between" href={`mailto:${site.mpesa.email}`}>
                  <span>Ethics &amp; Whistleblower</span>
                  <span className="text-[11px] text-[#aeaeb2] uppercase font-semibold">Direct</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Giving & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">Giving &amp; Official Contact</p>
            <div className="border border-[#e5e5e7] bg-[#f9f9fb] p-4 space-y-3 text-[13px]">
              <div className="flex items-center justify-between border-b border-[#e5e5e7] pb-2">
                <span className="text-[#6e6e73]">M-Pesa Paybill</span>
                <span className="font-bold text-black">{site.mpesa.paybill}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#e5e5e7] pb-2">
                <span className="text-[#6e6e73]">Account Name</span>
                <span className="font-bold text-black">{site.mpesa.account}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#e5e5e7] pb-2">
                <span className="text-[#6e6e73]">Official Email</span>
                <a href={`mailto:${site.mpesa.email}`} className="font-bold text-black hover:underline break-all">
                  {site.mpesa.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6e6e73]">Field Enquiries</span>
                <a href={`tel:${site.mpesa.phone.replace(/\s/g, '')}`} className="font-bold text-black hover:underline">
                  {site.mpesa.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Corporate Bar ── */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[12px] text-[#86868b]">

          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} INK CHARITY. All rights reserved.</p>
            <p className="text-[11px] text-[#aeaeb2]">Registered Community Charity Initiative &bull; Nairobi, Kenya</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            {/* Legal & Compliance links */}
            <div className="flex gap-4 font-medium text-[#515154]">
              <Link className="hover:text-black transition-colors" to="/privacy">Privacy &amp; Compliance</Link>
              <span>•</span>
              <Link className="hover:text-black transition-colors" to="/reports">Audit Reports</Link>
              <span>•</span>
              <Link className="hover:text-black transition-colors" to="/contact">Contact Support</Link>
            </div>

            <span className="hidden sm:block text-[#e5e5e7]">|</span>

            {/* Developer credit */}
            <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[#86868b]">
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
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
