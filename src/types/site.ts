import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type ClientVideo = {
  name: string;
  src: string;
};

export type Collaboration = {
  name: string;
  image: string;
};

export type ServiceTone = 'blue' | 'orange' | 'green' | 'purple' | 'cyan' | 'coral';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  tone: ServiceTone;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ContactDetail = {
  icon: LucideIcon;
  title: string;
  body: string;
  detail: string;
  href?: string;
};

export type FooterContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
};
