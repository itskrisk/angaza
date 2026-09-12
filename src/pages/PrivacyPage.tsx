import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function PrivacyPage() {
  return (
    <>
      <section className="bg-white border-b border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="col-span-12 lg:col-span-7">
              <p className="eyebrow text-gray-500 mb-4">Kenya Data Protection Act Compliance</p>
              <h1 className="display-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-black uppercase">
                Data Protection & Privacy Policy.
              </h1>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-xl text-black font-normal leading-relaxed">
                This policy outlines data handling practices under the Kenya Data Protection Act 2019. We retain operational transaction records and nothing else.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] border-b border-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <Reveal as="article" className="border-t border-black pt-6">
                <p className="eyebrow text-black">01 / Data Controller</p>
                <h2 className="display-heading text-3xl font-bold text-black mt-2">ANGAZA Foundation</h2>
                <p className="text-base text-gray-700 leading-relaxed font-normal mt-4">
                  We process personal data strictly to verify donations, coordinate food pickups, issue receipts, and manage direct logistics.
                </p>
              </Reveal>

              <Reveal as="article" className="border-t border-black pt-6" delay={60}>
                <p className="eyebrow text-black">02 / Collected Data</p>
                <h2 className="display-heading text-3xl font-bold text-black mt-2">Operational Information Only</h2>
                <p className="text-base text-gray-700 leading-relaxed font-normal mt-4">
                  We log transaction names, phone numbers, M-Pesa transaction reference numbers, donation amounts, and food pickup delivery addresses.
                </p>
              </Reveal>

              <Reveal as="article" className="border-t border-black pt-6" delay={120}>
                <p className="eyebrow text-black">03 / Purpose & Processing</p>
                <h2 className="display-heading text-3xl font-bold text-black mt-2">Direct Logistics & Accounting</h2>
                <p className="text-base text-gray-700 leading-relaxed font-normal mt-4">
                  Data is processed to dispatch collection vehicles, issue confirmation receipts, prevent fraud, and audit field operational delivery.
                </p>
              </Reveal>
            </div>

            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={100}>
              <p className="eyebrow text-black">Donor Rights</p>
              <ul className="space-y-4 text-sm font-semibold text-black">
                <li className="border-b border-black pb-3">Inspect personal records held by ANGAZA.</li>
                <li className="border-b border-black pb-3">Request record corrections or statutory erasure.</li>
                <li className="border-b border-black pb-3">Withdraw communication consent anytime.</li>
                <li className="pb-3">Contact data officer at <a className="underline hover:text-gray-600" href={`mailto:${site.mpesa.email}`}>{site.mpesa.email}</a></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-8 items-center">
            <Reveal as="div" className="col-span-12 lg:col-span-7 space-y-4">
              <p className="eyebrow text-gray-500">Security Commitment</p>
              <h2 className="display-heading text-4xl sm:text-6xl font-bold text-black">
                Restricted operational access.
              </h2>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Access is limited strictly to field leads and financial officers operating the route. Data is never sold or shared with third party advertisers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

