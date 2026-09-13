import { site } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

const contactItems = [
  {
    label: 'Phone & WhatsApp',
    value: site.mpesa.phone,
    href: `tel:${site.mpesa.phone.replace(/\s/g, '')}`,
    sub: 'Monday to Saturday, 8am – 6pm',
  },
  {
    label: 'Email',
    value: site.mpesa.email,
    href: `mailto:${site.mpesa.email}`,
    sub: 'Donations, school requests, field coordination',
  },
  {
    label: 'M-Pesa Paybill',
    value: site.mpesa.paybill,
    href: null,
    sub: `Account name: ${site.mpesa.account}`,
  },
  {
    label: 'Location',
    value: site.mpesa.address,
    href: null,
    sub: 'Nairobi, Kenya',
  },
];

export function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#e8e8e8] flex flex-col justify-center gap-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Direct Contact</p>
            <h1
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Reach out.<br />
              <span style={{ color: '#bbb' }}>We're ready.</span>
            </h1>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-16 lg:py-24 flex flex-col justify-center gap-4" delay={100}>
            <p className="text-[18px] text-black font-normal leading-relaxed max-w-lg">
              Whether you wish to donate clothes, books, food, or funds — or if you represent a children's home, elderly center, or school in need of support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact details — 4 clean rows ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="border-b border-[#e8e8e8] px-6 lg:px-14 py-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Get in touch</span>
        </div>
        <div className="divide-y divide-[#e8e8e8]">
          {contactItems.map((item, i) => (
            <Reveal
              as="div"
              key={item.label}
              delay={i * 60}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-4 px-6 lg:px-14 py-8 items-center"
            >
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#aaa]">{item.label}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-black text-black hover:text-[#555] transition-colors tracking-tight"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    className="font-black text-black tracking-tight"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                  >
                    {item.value}
                  </span>
                )}
                <p className="text-[12px] font-mono text-[#aaa] uppercase tracking-wider">{item.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Pickup protocol ── */}
      <section className="bg-[#f8f8f6] border-b border-[#e8e8e8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-14 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-[#e0e0e0] flex flex-col justify-center gap-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#aaa]">Pickup & Drop-off Protocol</p>
            <h2
              className="font-black text-black leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
            >
              Item, location,<br />timing.
            </h2>
          </div>
          <Reveal as="div" className="px-6 lg:px-14 py-12 lg:py-16 flex flex-col justify-center gap-5" delay={100}>
            <p className="text-[17px] text-black font-normal leading-relaxed max-w-lg">
              When donating clothes, school books, or food items — let us know your location, estimated quantity, and a contact person. We will coordinate driver pickup or confirm drop-off details immediately.
            </p>
            <a
              href={`mailto:${site.mpesa.email}`}
              className="self-start text-[12px] font-mono font-bold uppercase tracking-[0.18em] text-black border-b border-black pb-0.5 hover:text-[#555] hover:border-[#555] transition-colors"
            >
              Email us to arrange →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
