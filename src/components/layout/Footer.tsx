import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { Logo } from './Navigation';

const compliance = [
  { label: 'Data Protection Policy', badge: 'Act 2019', to: '/privacy' },
  { label: 'Financial Audit Ledger', badge: 'Public', to: '/reports' },
  { label: 'Child Safeguarding Standard', badge: 'Enforced', to: '/about' },
  { label: 'Ethics & Whistleblower', badge: 'Direct', href: `mailto:${site.mpesa.email}` },
  { label: 'Donor Privacy Rights', badge: 'GDPR-Aligned', to: '/privacy' },
  { label: 'Non-Profit Transparency', badge: 'Annual', to: '/reports' },
];

const focusAreas = [
  'Children\'s Homes',
  'Grassroots Primary Schools',
  'Senior Care Facilities',
  'Food & Nutrition Relief',
  'Clothing & Shoe Drives',
  'Books & School Supplies',
];

export function Footer() {
  return (
    <footer
      className="text-white font-sans selection:bg-white selection:text-black"
      style={{ backgroundColor: '#000000' }}
    >

      {/* ── Main grid ── */}
      <div className="px-6 lg:px-12 py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Brand block — 4 cols */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-6">
          <div>
            <Logo />
          </div>
          <p className="text-[14px] leading-relaxed text-white/50 font-normal max-w-sm">
            INK CHARITY is a hands-on Kenyan charity initiative. We step in wherever help is needed, delivering food, clothes, books, and essential care directly to registered homes and schools.
          </p>
          <div className="space-y-2 text-[12px] text-white/40" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <p>
              <span className="text-white/60 font-semibold">Powered by:{' '}</span>
              <a href="https://inkcoaching.co.ke/" target="_blank" rel="noopener noreferrer"
                className="text-white font-bold hover:underline">
                inkcoaching.co.ke →
              </a>
            </p>
            <p><span className="text-white/60 font-semibold">Humanitarian Partner:{' '}</span>Godia Humanitarian Services</p>
            <p><span className="text-white/60 font-semibold">Technology:{' '}</span>Muncheez Technologies Ltd</p>
          </div>
        </div>

        {/* Focus Areas — 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/25">
            Focus Areas
          </p>
          <ul className="space-y-2.5">
            {focusAreas.map(item => (
              <li key={item} className="text-[13px] text-white/50 hover:text-white transition-colors duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Governance & Compliance — 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/25">
            Governance & Compliance
          </p>
          <ul className="space-y-3">
            {compliance.map((item) => (
              <li key={item.label}>
                {'to' in item ? (
                  <Link to={item.to!}
                    className="flex items-center justify-between gap-3 text-[13px] text-white/50 hover:text-white transition-colors duration-200 group">
                    <span>{item.label}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-white/20 group-hover:text-white/50 transition-colors shrink-0">
                      {item.badge}
                    </span>
                  </Link>
                ) : (
                  <a href={item.href}
                    className="flex items-center justify-between gap-3 text-[13px] text-white/50 hover:text-white transition-colors duration-200 group">
                    <span>{item.label}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-white/20 group-hover:text-white/50 transition-colors shrink-0">
                      {item.badge}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Giving & Contact — 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/25">
            Official Giving & Contact
          </p>

          {/* M-Pesa block */}
          <div className="space-y-0 text-[13px]" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { label: 'M-Pesa Paybill', value: site.mpesa.paybill },
              { label: 'Account Name', value: site.mpesa.account },
              { label: 'Official Email', value: site.mpesa.email, href: `mailto:${site.mpesa.email}` },
              { label: 'Field Enquiries', value: site.mpesa.phone, href: `tel:${site.mpesa.phone.replace(/\s/g, '')}` },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-center justify-between gap-3 px-4 py-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="text-white/35 shrink-0">{label}</span>
                {href ? (
                  <a href={href} className="font-bold text-white hover:underline text-right break-all">{value}</a>
                ) : (
                  <span className="font-bold text-white text-right">{value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Page links */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {site.footerNav.map((item) => (
              <Link key={item.href} to={item.href}
                className="text-[12px] text-white/35 hover:text-white transition-colors truncate">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="px-6 lg:px-12 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] font-mono text-white/25">
        <div className="space-y-0.5">
          <p>&copy; {new Date().getFullYear()} INK CHARITY. All rights reserved.</p>
          <p>Registered Community Charity Initiative · Nairobi, Kenya</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link className="hover:text-white transition-colors" to="/privacy">Privacy</Link>
          <span className="text-white/15">·</span>
          <Link className="hover:text-white transition-colors" to="/reports">Reports</Link>
          <span className="text-white/15">·</span>
          <Link className="hover:text-white transition-colors" to="/contact">Contact</Link>
          <span className="text-white/15">·</span>
          <a href="https://iamkris.vercel.app" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors">
            Built by Kris
          </a>
        </div>
      </div>

    </footer>
  );
}
