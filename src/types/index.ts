export type ImpactMetric = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
};

export type Story = {
  quote: string;
  body: string;
  location: string;
  date: string;
};

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  location: string;
  date: string;
};
