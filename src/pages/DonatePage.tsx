'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

type Mode = 'mpesa' | 'card' | 'recurring';

export function DonatePage() {
  const [mode, setMode] = useState<Mode>('mpesa');
  const [amount, setAmount] = useState('500');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('processing');
    window.setTimeout(() => setStatus('success'), 900);
  };

  return (
    <>
      <section className="bg-white border-b border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-8 items-end">
            <Reveal as="div" className="col-span-12 lg:col-span-7">
              <p className="eyebrow text-gray-500 mb-4">Support INK CHARITY</p>
              <h1 className="display-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-black uppercase">
                Support a home or school today.
              </h1>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-10 space-y-4" delay={120}>
              <p className="text-xl text-black font-normal leading-relaxed">
                Give via M-Pesa, card, or donate physical items like clothes, books, and food directly to children's homes, elderly care centers, and schools.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] border-b border-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-8">
            
            <Reveal as="div" className="col-span-12 lg:col-span-5 space-y-8">
              <div>
                <p className="eyebrow text-black">Donation Channel</p>
                <div className="mt-4 flex flex-col space-y-2" role="tablist" aria-label="Donation method">
                  {([
                    ['mpesa', 'M-Pesa Express', 'Instant STK push to phone'],
                    ['card', 'Debit / Credit Card', 'Visa and Mastercard'],
                    ['recurring', 'Monthly Partner', 'Sustained monthly support'],
                  ] as Array<[Mode, string, string]>).map(([value, label, detail]) => (
                    <button
                      aria-selected={mode === value}
                      className={`flex items-center justify-between border p-5 text-left transition-colors ${
                        mode === value ? 'border-black bg-white text-black font-bold' : 'border-gray-300 bg-white text-gray-700 hover:border-black'
                      }`}
                      key={value}
                      onClick={() => setMode(value)}
                      role="tab"
                      type="button"
                    >
                      <div>
                        <span className="block text-base font-semibold">{label}</span>
                        <span className="block text-xs text-gray-500 mt-1">{detail}</span>
                      </div>
                      <span aria-hidden="true" className="text-xl">→</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-black pt-6 space-y-2">
                <p className="eyebrow text-black">Direct Manual Paybill</p>
                <p className="text-lg text-black">Paybill Number: <span className="font-bold">{site.mpesa.paybill}</span></p>
                <p className="text-lg text-black">Account Name: <span className="font-bold">{site.mpesa.account}</span></p>
              </div>

              <div className="border-t border-black pt-6 space-y-3 bg-white p-5 border">
                <p className="eyebrow text-black">In-Kind Items (Clothes, Books, Food)</p>
                <p className="text-sm text-gray-700 font-normal leading-relaxed">
                  Have clothes, shoes, textbooks, or food packages to donate? Call or WhatsApp us to arrange drop-off or pickup.
                </p>
                <a href={`tel:${site.mpesa.phone.replace(/\s/g, '')}`} className="block text-sm font-bold text-black hover:underline">
                  {site.mpesa.phone}
                </a>
                <a href={`mailto:${site.mpesa.email}`} className="block text-sm font-bold text-black hover:underline">
                  {site.mpesa.email}
                </a>
              </div>
            </Reveal>

            <Reveal as="div" className="col-span-12 lg:col-span-7" delay={100}>
              <div className="bg-white border border-black p-8 sm:p-12">
                {status === 'success' ? (
                  <div aria-live="polite" className="space-y-6">
                    <p className="eyebrow text-black">Transaction Request Logged</p>
                    <h2 className="display-heading text-4xl sm:text-5xl font-bold text-black">
                      {mode === 'mpesa' ? 'Check your phone prompt.' : 'Confirmation registered.'}
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed font-normal">
                      {mode === 'mpesa'
                        ? `An STK push for ${amount} KES has been sent to ${phone || 'your phone'}. Enter your PIN on your handset to authorize.`
                        : mode === 'card'
                          ? 'Card payment session initialized.'
                          : `Monthly contribution of ${amount} KES registered for ${email || 'your email'}.`}
                    </p>
                    <div className="pt-4 border-t border-black">
                      <Button onClick={() => setStatus('idle')} variant="ghost">
                        Make Another Contribution
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-6">
                    <div>
                      <p className="eyebrow text-gray-500">
                        {mode === 'mpesa' ? 'M-Pesa STK Push' : mode === 'card' ? 'Card Transaction' : 'Monthly Giving'}
                      </p>
                      <h2 className="display-heading text-3xl sm:text-4xl font-bold text-black mt-2">
                        {mode === 'mpesa' ? 'Enter your details.' : mode === 'card' ? 'Enter card details.' : 'Set monthly rhythm.'}
                      </h2>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="amount">
                        Contribution Amount (KES)
                      </label>
                      <div className="relative">
                        <input
                          className="field-input pr-16"
                          id="amount"
                          inputMode="numeric"
                          min="50"
                          onChange={(event) => setAmount(event.target.value)}
                          placeholder="500"
                          required
                          type="number"
                          value={amount}
                        />
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">KES</span>
                      </div>
                    </div>

                    {mode === 'mpesa' && (
                      <div>
                        <label className="field-label" htmlFor="phone">
                          M-Pesa Mobile Number
                        </label>
                        <input
                          className="field-input"
                          id="phone"
                          inputMode="tel"
                          onChange={(event) => setPhone(event.target.value)}
                          placeholder="0769 032 075"
                          required
                          type="tel"
                          value={phone}
                        />
                        <p className="mt-2 text-xs text-gray-500 font-normal">
                          Instant STK push notification will appear on your phone screen.
                        </p>
                      </div>
                    )}

                    {mode === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="field-label" htmlFor="card-number">Card Number</label>
                          <input className="field-input" id="card-number" inputMode="numeric" placeholder="4242 4242 4242 4242" required type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="field-label" htmlFor="expiry">Expiry Date</label>
                            <input className="field-input" id="expiry" placeholder="MM / YY" required type="text" />
                          </div>
                          <div>
                            <label className="field-label" htmlFor="cvc">Security Code</label>
                            <input className="field-input" id="cvc" inputMode="numeric" placeholder="123" required type="text" />
                          </div>
                        </div>
                      </div>
                    )}

                    {mode === 'recurring' && (
                      <div>
                        <label className="field-label" htmlFor="email">
                          Email Address for Monthly Receipts
                        </label>
                        <input
                          className="field-input"
                          id="email"
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="you@example.com"
                          required
                          type="email"
                          value={email}
                        />
                      </div>
                    )}

                    <div className="pt-4 border-t border-black">
                      <Button className="w-full" type="submit" variant="accent">
                        {status === 'processing' ? 'Processing…' : mode === 'mpesa' ? 'Send STK Push' : mode === 'card' ? 'Submit Card Payment' : 'Initialize Monthly Support'}
                        <span aria-hidden="true">→</span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-8 items-center">
            <Reveal as="div" className="col-span-12 lg:col-span-7 space-y-4">
              <p className="eyebrow text-gray-400">Field Ledger &amp; Audit</p>
              <h2 className="display-heading text-4xl sm:text-6xl font-bold text-white">Every donation logged to destination.</h2>
            </Reveal>
            <Reveal as="div" className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-800 pt-8 lg:pt-0 lg:pl-10 space-y-6" delay={120}>
              <p className="text-lg text-gray-300 font-normal leading-relaxed">
                We record itemized ledgers for all clothing drives, educational supply distributions, and financial receipts.
              </p>
              <div>
                <Button href="/reports" variant="ghost" className="!border-white !text-white hover:!bg-white hover:!text-black">
                  Inspect Published Reports <span aria-hidden="true">→</span>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
