const logos = [
  { name: 'inkcoaching.co.ke', src: '/images/LOGO/inkcoachinglogo.png', href: 'https://inkcoaching.co.ke/' },
  { name: 'Godia Humanitarian Services', src: '/images/LOGO/godialogo.png', href: null },
  { name: 'Muncheez Technologies Ltd', src: '/images/LOGO/muncheezlogo.png', href: null },
  { name: 'Vuka', src: '/images/LOGO/vukalogo.png', href: null },
];

export function PartnersStrip() {
  // Duplicate for seamless loop — CSS translateX(-50%) trick
  const items = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden border-y border-[#e8e8e8] bg-white py-6">
      <div
        className="flex w-max animate-marquee items-center gap-36 hover:[animation-play-state:paused]"
        style={{ '--duration': '28s' } as React.CSSProperties}
      >
        {items.map((logo, i) => {
          const img = (
            <img
              src={logo.src}
              alt={logo.name}
              className="h-9 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          );
          return (
            <div key={i} className="flex shrink-0 items-center">
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  {img}
                </a>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
