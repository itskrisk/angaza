import { site } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

export function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-[#e5e5e7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="lg:col-span-7">
              <p className="eyebrow mb-4">Direct Contact</p>
              <h1 className="display-heading text-[clamp(2.25rem,7vw,5rem)] font-bold text-black">
                Call first.<br />We move second.
              </h1>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-[17px] text-black font-normal leading-relaxed">
                If you have surplus food, funds, or a community route that needs opening, reach out directly. We reply fast with clear operational steps.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-[#f5f5f7] border-b border-[#e5e5e7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <Reveal as="div" className="lg:col-span-5 space-y-6">
              <p className="eyebrow">M-Pesa Information</p>
              <h2 className="display-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-black">Direct Support Paybill.</h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                For food pickups or donation queries, call or email first so we can coordinate vehicles and destination kitchens.
              </p>
              <div className="border-t border-[#e5e5e7] pt-6 space-y-3">
                <p className="text-[17px] text-black">
                  Paybill: <span className="font-bold">{site.mpesa.paybill}</span>
                </p>
                <p className="text-[17px] text-black">
                  Account: <span className="font-bold">{site.mpesa.account}</span>
                </p>
              </div>
            </Reveal>

            <Reveal as="div" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" delay={100}>
              <div className="bg-white border border-[#e5e5e7] p-6 space-y-3">
                <p className="eyebrow">Phone</p>
                <a className="block text-[1.25rem] font-bold text-black hover:underline break-all" href={`tel:${site.mpesa.phone.replace(/\s/g, '')}`}>
                  {site.mpesa.phone}
                </a>
                <p className="text-[12px] text-[#6e6e73]">Monday to Saturday, 8am to 6pm</p>
              </div>

              <div className="bg-white border border-[#e5e5e7] p-6 space-y-3">
                <p className="eyebrow">Email</p>
                <a className="block text-[1.1rem] font-bold text-black hover:underline break-all" href={`mailto:${site.mpesa.email}`}>
                  {site.mpesa.email}
                </a>
                <p className="text-[12px] text-[#6e6e73]">Food pickups, donations, field requests</p>
              </div>

              <div className="bg-white border border-[#e5e5e7] p-6 space-y-3 sm:col-span-2">
                <p className="eyebrow">Address</p>
                <address className="not-italic text-[1.1rem] font-bold text-black">{site.mpesa.address}</address>
                <p className="text-[12px] text-[#6e6e73]">Nairobi, Kenya</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Pickup Protocol */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal as="div" className="lg:col-span-7 space-y-4">
              <p className="eyebrow">Pickup Protocol</p>
              <h2 className="display-heading text-[clamp(1.75rem,4vw,3rem)] font-bold text-black">
                Quantity, location, and timing.
              </h2>
            </Reveal>
            <Reveal as="div" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#e5e5e7] pt-8 lg:pt-0 lg:pl-10" delay={120}>
              <p className="text-[17px] text-black font-normal leading-relaxed">
                When calling for food pickups, give us quantity estimates, access points, and an on-site contact. We confirm driver dispatch immediately.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
