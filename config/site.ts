export const site = {
  name: 'INK CHARITY',
  tagline: 'Direct community support in homes and schools.',
  description:
    'INK CHARITY is a hands-on Kenyan charity initiative. We step in wherever help is needed, delivering food, clothes, learning materials, and basic care directly to children\'s homes, elderly care centers, and grassroots schools.',
  location: 'Nairobi, Kenya',
  founded: '2024',
  updated: '13 September 2026',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reports', href: '/reports' },
    { label: 'Contact', href: '/contact' },
  ] as const,

  footerNav: [
    { label: 'Our Work', href: '/our-work' },
    { label: 'About Us', href: '/about' },
    { label: 'Photo Gallery', href: '/gallery' },
    { label: 'Financial Reports', href: '/reports' },
    { label: 'Privacy & Data Policy', href: '/privacy' },
    { label: 'Contact Team', href: '/contact' },
  ] as const,

  mpesa: {
    serviceName: 'INK CHARITY',
    paybill: '522552',
    account: 'INK CHARITY',
    phone: '+254 769 032 075',
    email: 'hello@inkcoaching.co.ke',
    address: 'Nairobi, Kenya',
  },

  impactMetrics: [
    { label: 'Children\'s homes supported', value: 8, suffix: ' homes', decimals: 0 },
    { label: 'Grassroots schools visited', value: 6, suffix: ' schools', decimals: 0 },
    { label: 'Senior care centers reached', value: 4, suffix: ' centers', decimals: 0 },
    { label: 'Active field volunteers', value: 12, suffix: ' team members', decimals: 0 },
  ] as const,

  story: {
    quote:
      '"We loaded sweaters, textbooks, shoes, and fresh food into the van. By afternoon, children at the home had warm clothes and new reading books."',
    body:
      'A supporter reached out with boxes of school books, clothes, and food items. Our field team verified the list with the home administrator and delivered everything directly. No long forms. No delays. Just practical community care delivered where it counts.',
    location: 'Machakos Children Home',
    date: '10 September 2026',
    image: '/images/missing these hearts of gold.jpg',
  },

  photos: [
    {
      src: '/images/v.jpg',
      alt: 'Children sharing smiles and heart gestures',
      caption: 'Direct delivery of clothing, shoes, and learning supplies.',
      location: 'Mully Children Home, Machakos',
      date: '06 September 2026',
    },
    {
      src: '/images/p.jpg',
      alt: 'Young girl receives toys and essentials',
      caption: 'Bringing warmth, clothing, and essential items to kids.',
      location: 'Kibera Community Center, Nairobi',
      date: '05 September 2026',
    },
    {
      src: '/images/k.jpg',
      alt: 'Local youth volunteers organizing packages',
      caption: 'Volunteers packing school kits and clothing bundles.',
      location: 'Kisumu, Kenya',
      date: '04 September 2026',
    },
    {
      src: '/images/b.jpg',
      alt: 'Children playing outdoors',
      caption: 'When basic needs like food and clothes are met, kids can focus on playing and learning.',
      location: 'Kibera, Nairobi',
      date: '03 September 2026',
    },
    {
      src: '/images/c.jpg',
      alt: 'Children dancing at a school gathering',
      caption: 'Celebrating a fresh drop of books and sports equipment at a local school.',
      location: 'Eldoret, Kenya',
      date: '02 September 2026',
    },
    {
      src: '/images/r.jpg',
      alt: 'Children gathered at a home',
      caption: 'Direct supply drop of rice, cooking oil, and warm blankets.',
      location: 'Machakos Children Home',
      date: '01 September 2026',
    },
    {
      src: '/images/d.jpg',
      alt: 'School children waving with excitement',
      caption: 'Morning deliveries of exercise books and pencils to primary students.',
      location: 'Dagoretti School, Nairobi',
      date: '30 August 2026',
    },
    {
      src: '/images/h.jpg',
      alt: 'Children playing together in a circle',
      caption: 'Bringing communities together through simple acts of care.',
      location: 'Mathare, Nairobi',
      date: '28 August 2026',
    },
    {
      src: '/images/s.jpg',
      alt: 'Children smiling warmly',
      caption: 'Direct outreach across children homes and community care points.',
      location: 'Kisumu, Kenya',
      date: '25 August 2026',
    },
    {
      src: '/images/Circle of Life.jpg',
      alt: 'Children holding hands in a massive circle in a rural compound',
      caption: 'Community support network extending across homes and schools.',
      location: 'Coast Region, Kenya',
      date: '20 August 2026',
    },
    {
      src: '/images/Makes my heart smile_.jpg',
      alt: 'Children smiling brightly in new clothing',
      caption: 'Warm smiles as children receive new sweaters and footwear.',
      location: 'Nairobi, Kenya',
      date: '18 August 2026',
    },
    {
      src: '/images/OneHope--Benin2013.jpg',
      alt: 'School supply distribution',
      caption: 'Textbooks and learning materials distributed to primary classes.',
      location: 'Machakos, Kenya',
      date: '15 August 2026',
    },
    {
      src: '/images/download (13).jpg',
      alt: 'Clothing drive delivery at shelter',
      caption: 'Clothing and shoe packages handed over to home administrators.',
      location: 'Kibera, Nairobi',
      date: '12 August 2026',
    },
    {
      src: '/images/download (14).jpg',
      alt: 'Primary school classroom session',
      caption: 'Students engaged in learning after receiving fresh exercise books.',
      location: 'Eldoret, Kenya',
      date: '10 August 2026',
    },
    {
      src: '/images/malawian joy.jpg',
      alt: 'Joyful community gathering',
      caption: 'Community celebration following elderly care package delivery.',
      location: 'Kisumu, Kenya',
      date: '08 August 2026',
    },
    {
      src: '/images/missing these hearts of gold.jpg',
      alt: 'Warm companionship at care center',
      caption: 'Personal care, bedding, and companionship at senior facilities.',
      location: 'Machakos, Kenya',
      date: '05 August 2026',
    },
  ] as const,

  teamMembers: [
    {
      name: 'Wanjiru Mwangi',
      role: 'Co-founder & Operations Lead',
      note: 'Leads field visits across children homes and schools, keeping itemized records of every shirt, book, and meal delivered.',
      image: '/images/k.jpg',
    },
    {
      name: 'Brian Otieno',
      role: 'Field Logistics Coordinator',
      note: 'Oversees vehicle routes and drop-offs for clothing drives, food kits, and educational supplies.',
      image: '/images/4606408474422562880.jpg',
    },
    {
      name: 'Amina Sheikh',
      role: 'School & Home Liaison',
      note: 'Works directly with school principals and children home directors to identify urgent needs.',
      image: '/images/download (13).jpg',
    },
  ] as const,
};

export type NavItem = (typeof site.nav)[number];
export type FooterNavItem = (typeof site.footerNav)[number];
export type ImpactMetric = (typeof site.impactMetrics)[number];
