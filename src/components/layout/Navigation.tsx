'use client';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { site } from '@/config/site';
import { cn } from '@/lib/cn';

export function Logo() {
  return (
    <Link aria-label="INK CHARITY Home" to="/" className="flex items-center shrink-0 gap-2">
      <img
        alt="INK CHARITY"
        className="h-9 sm:h-10 w-auto object-contain max-w-[180px]"
        src="/images/LOGO/newlogo.png"
      />
    </Link>
  );
}

const navLinks = [
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reports', href: '/reports' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── close on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ── subtle scroll shadow ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* ── Escape to close ── */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [menuOpen]);

  /* ── Prevent background scroll when menu open ── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* ── GSAP animation using context for clean cleanup ── */
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const overlay = containerRef.current!.querySelector<HTMLElement>('.nav-overlay');
      const items = containerRef.current!.querySelectorAll<HTMLElement>('.nav-link-item');
      const meta = containerRef.current!.querySelector<HTMLElement>('.nav-meta');

      if (!overlay) return;

      if (menuOpen) {
        gsap.set(overlay, { display: 'flex' });
        gsap.fromTo(
          overlay,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power3.out', delay: 0.08 }
        );
        gsap.fromTo(
          meta,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.2 }
        );
      } else {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(overlay, { display: 'none' });
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(v => !v);

  return (
    <div ref={containerRef}>
      {/* ════════════════ HEADER BAR ════════════════ */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-shadow duration-300',
          scrolled ? 'shadow-[0_1px_0_0_#e5e5e7]' : 'border-b border-[#e5e5e7]',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo />

          {/* ── DESKTOP NAV (lg+) ── */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map(item => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'relative px-3 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200',
                    active ? 'text-black' : 'text-[#6e6e73] hover:text-black',
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 bottom-0 h-px bg-black" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── MOBILE HAMBURGER (< lg only) ── */}
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 shrink-0 p-2"
            onClick={toggleMenu}
            type="button"
          >
            <span
              className={`block h-px w-[22px] bg-black origin-center transition-all duration-300 ease-out ${
                menuOpen ? 'rotate-45 translate-y-[10px]' : ''
              }`}
            />
            <span
              className={`block h-px w-[22px] bg-black origin-center transition-all duration-300 ease-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-[22px] bg-black origin-center transition-all duration-300 ease-out ${
                menuOpen ? '-rotate-45 -translate-y-[10px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* ════════════════ MOBILE FULL-SCREEN OVERLAY ════════════════ */}
      {menuOpen && (
        <div
          aria-hidden={!menuOpen}
          aria-modal="true"
          className="nav-overlay fixed inset-0 z-[60] bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-6 lg:hidden selection:bg-black selection:text-white overflow-y-auto"
          role="dialog"
        >
          {/* Top row: close button */}
          <div className="flex justify-end mb-4 sm:mb-6">
            <button
              aria-label="Close menu"
              className="flex items-center justify-center w-10 h-10 text-black hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <span className="text-2xl leading-none">✕</span>
            </button>
          </div>

          {/* Center Nav Links */}
          <nav className="max-w-4xl mx-auto w-full my-auto py-6 sm:py-10" aria-label="Mobile navigation">
            <ul className="space-y-3 sm:space-y-5">
              {site.nav.map((item, i) => {
                const active = location.pathname === item.href;
                return (
                  <li key={item.href} className="nav-link-item border-b border-[#f0f0f2] pb-3 sm:pb-5">
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'group flex items-baseline justify-between text-[clamp(1.5rem,6vw,2.5rem)] font-semibold tracking-tight transition-colors duration-200',
                        active ? 'text-black' : 'text-[#3a3a3c]',
                      )}
                    >
                      <div className="flex items-baseline gap-3 sm:gap-6">
                        <span className="text-[11px] font-medium text-[#c7c7cc] w-5 tabular-nums shrink-0 group-hover:text-black transition-colors">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-xl opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Meta */}
          <div
            className="nav-meta max-w-4xl mx-auto w-full pt-4 sm:pt-6 border-t border-[#e5e5e7]"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between gap-x-5 gap-y-1">
              <span className="text-[12px] font-medium text-[#aeaeb2] uppercase tracking-wider">Nairobi, Kenya</span>
              <a
                href={`mailto:${site.mpesa.email}`}
                className="text-[12px] font-medium text-[#6e6e73] hover:text-black transition-colors"
              >
                {site.mpesa.email}
              </a>
            </div>
            <Link
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="btn-accent self-start text-[13px] font-semibold px-5 h-10 min-h-0 mt-4 sm:mt-0"
            >
              Give via M-Pesa →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
