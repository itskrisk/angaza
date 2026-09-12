export const site = {
  name: 'ANGAZA Foundation',
  tagline: 'Light, in the middle of the night.',
  description:
    'ANGAZA Foundation is a registered Kenyan charity. We move surplus food, funds, and essential supplies directly to where they are needed most. Nairobi, Kisumu, Kibera, Eldoret, and beyond. One direct route at a time.',
  location: 'Nairobi, Kenya',
  founded: '2024',
  updated: '12 September 2026',

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
    { label: 'Privacy & Data', href: '/privacy' },
    { label: 'Contact Team', href: '/contact' },
  ] as const,

  mpesa: {
    serviceName: 'ANGAZA Foundation',
    paybill: '522552',
    account: 'ANGAZA',
    phone: '+254 700 000 000',
    email: 'hello@angaza.or.ke',
    address: '4th Floor, Ngong Avenue, Nairobi, Kenya',
  },

  impactMetrics: [
    { label: 'Meals served this month', value: 2347, suffix: '', decimals: 0 },
    { label: 'Tonnes of food rescued', value: 14.2, suffix: ' tonnes', decimals: 1 },
    { label: 'Active field volunteers', value: 89, suffix: '', decimals: 0 },
    { label: 'Community kitchens active', value: 12, suffix: ' kitchens', decimals: 0 },
  ] as const,

  story: {
    quote:
      '"The maize came from a wedding in Karen. By Tuesday evening it was warm ugali in Kibera."',
    body:
      'A family had surplus food after a weekend celebration in Karen. They reached out to ANGAZA. Within two hours our team collected, verified, and delivered 340 warm meals to a community kitchen in Kibera. No food wasted. No long bureaucratic delay. Just practical logistics connecting abundance with need.',
    location: 'Karen to Kibera, Nairobi',
    date: '08 September 2026',
  },

  photos: [
    {
      src: '/images/v.jpg',
      alt: 'Children sharing smiles and heart gestures',
      caption: 'The handoff is the heart of the work.',
      location: 'Mully Children Home, Machakos',
      date: '06 September 2026',
    },
    {
      src: '/images/p.jpg',
      alt: 'Pure joy as a young girl receives a teddy bear',
      caption: 'Food and care that was sitting unused now bringing pure joy.',
      location: 'Kibera, Nairobi',
      date: '05 September 2026',
    },
    {
      src: '/images/k.jpg',
      alt: 'Local youth team members and volunteers',
      caption: 'Youth leaders mapping out evening food pickup routes.',
      location: 'Kisumu, Kenya',
      date: '04 September 2026',
    },
    {
      src: '/images/b.jpg',
      alt: 'Children playing football together outdoors',
      caption: 'When basic needs are met, childhood finds its natural playfulness.',
      location: 'Kibera, Nairobi',
      date: '03 September 2026',
    },
    {
      src: '/images/c.jpg',
      alt: 'Children dancing with joy at a community gathering',
      caption: 'A lunch delivery turns into a neighborhood celebration.',
      location: 'Eldoret, Kenya',
      date: '02 September 2026',
    },
    {
      src: '/images/r.jpg',
      alt: 'Children gathered together at Mully Children Home',
      caption: 'Direct delivery of rice and legumes to children home kitchens.',
      location: 'Mully Children Home, Machakos',
      date: '01 September 2026',
    },
    {
      src: '/images/d.jpg',
      alt: 'School children waving with excitement',
      caption: 'Every morning delivery ensures children enter class ready to learn.',
      location: 'Dagoretti, Nairobi',
      date: '30 August 2026',
    },
    {
      src: '/images/h.jpg',
      alt: 'Children playing hand-in-hand in a circle',
      caption: 'Community solidarity in action.',
      location: 'Mathare, Nairobi',
      date: '28 August 2026',
    },
    {
      src: '/images/s.jpg',
      alt: 'Children smiling with open arms',
      caption: 'Open arms and open hearts across community centers.',
      location: 'Kisumu, Kenya',
      date: '25 August 2026',
    },
    {
      src: '/images/Circle of Life.jpg',
      alt: 'Children holding hands in a massive circle in a rural compound',
      caption: 'The circle of community support extending across Kenya.',
      location: 'Coast Region, Kenya',
      date: '20 August 2026',
    },
  ] as const,

  teamMembers: [
    {
      name: 'Wanjiru Mwangi',
      role: 'Co-founder & Operations Lead',
      note: 'Manages route verification, tracking every bag of grain from pickup to final kitchen ledger.',
      image: '/src/images/k.jpg',
    },
    {
      name: 'Brian Otieno',
      role: 'Field Logistics Coordinator',
      note: 'Coordinates driver routes across Nairobi and Kisumu, ensuring food arrives fresh and safe.',
      image: '/src/images/v.jpg',
    },
    {
      name: 'Amina Sheikh',
      role: 'Community Kitchen Liaison',
      note: 'Partners directly with grassroots women leaders who manage community meals on the ground.',
      image: '/src/images/c.jpg',
    },
  ] as const,
};

export type NavItem = (typeof site.nav)[number];
export type FooterNavItem = (typeof site.footerNav)[number];
export type ImpactMetric = (typeof site.impactMetrics)[number];

