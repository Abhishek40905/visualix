import {
  Camera,
  Clock,
  Factory,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import type {
  ClientVideo,
  Collaboration,
  ContactDetail,
  FooterContactDetail,
  NavItem,
  Service,
  Stat,
  Testimonial,
} from '../types/site';

export const phoneDisplay = '+91 95805 89104';
export const phoneHref = 'tel:+919580589104';
export const whatsappHref = 'https://wa.me/919580589104';
export const emailAddress = 'visualixstudioofficial@gmail.com';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const clientVideos: ClientVideo[] = [
  { name: 'JIO BP', src: '/jio_bp.MP4' },
  { name: 'CSJMIF', src: '/Intro_Csjmif.mp4' },
  { name: 'Ottoclick', src: '/intro_ottoclick.mp4' },
  { name: 'Slogfy', src: '/Intro_Slogfy.mp4' },
  { name: 'EHM', src: '/ehm_intro.mp4' },
];

export const collaborations: Collaboration[] = [
  { name: 'JIO BP', image: '/jio_bp.png' },
  { name: 'CSJMU', image: '/csjmu.PNG' },
  { name: 'CSJMIF', image: '/csjmif.PNG' },
  { name: 'Ottoclick', image: '/ottoclick.JPG' },
  { name: 'Slogfy', image: '/slogfy.jpg' },
  { name: 'B-fitt', image: '/b-fit.JPG' },
  { name: 'One rep max', image: '/one_rep_max.JPG' },
];

export const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'LinkedIn & Corporate Social Media Management',
    description:
      'Complete content creation and platform management for LinkedIn, Instagram, and YouTube, designed for industrial brands, global partners, and professionals.',
    features: [
      'Weekly B2B content strategy',
      'Executive voice and thought leadership',
      'ESG, recruitment, and milestone storytelling',
      'Community and investor engagement',
    ],
    tone: 'blue',
  },
  {
    icon: Factory,
    title: 'Industrial & Corporate Film Production',
    description:
      'Bring your infrastructure, innovation, and team to life with premium video storytelling, from floor-level process to boardroom leadership.',
    features: [
      'Factory walkthroughs',
      'Product and process documentaries',
      'Safety, training, and HR films',
      'Leadership talks',
    ],
    tone: 'orange',
  },
  {
    icon: Leaf,
    title: 'CSR / ESG / Sustainability Films',
    description:
      'Showcase your commitment to responsible business through films tailored for public, government, and investor visibility.',
    features: [
      'CSR impact storytelling',
      'Environment and resource management',
      'DEI, safety, and governance visuals',
      'Ideal for reports, LinkedIn, and global forums',
    ],
    tone: 'green',
    featured: true,
  },
  {
    icon: Rocket,
    title: 'Digital Marketing for Industries',
    description:
      'Targeted performance marketing and brand visibility campaigns for industrial clients and service-based enterprises.',
    features: [
      'Meta and Google Ads',
      'Lead-gen campaigns for B2B',
      'Launch, hiring, and event marketing',
      'Website landing pages and SEO',
    ],
    tone: 'purple',
  },
  {
    icon: Plane,
    title: 'Aerial & Drone Filming',
    description:
      'Cinematic aerial visuals that showcase the scale, structure, and landscape of your operations or real estate projects.',
    features: [
      'Licensed drone operations',
      'High-resolution footage of plants, townships, campuses',
      'Aerial documentation for sustainability, CSR, and mapping',
    ],
    tone: 'cyan',
  },
  {
    icon: Camera,
    title: 'Industrial Photography & Short Reels',
    description:
      'Capture the heartbeat of your operation, from machine to manpower. Ideal for brochures, social feeds, and recruitment campaigns.',
    features: [
      'Facility, equipment, and team photography',
      'Packaging and product visuals',
      'Events, awards, and documentation reels',
      'Recruitment and HR branding visuals',
    ],
    tone: 'coral',
  },
];

export const serviceOptions = services.map((service) => service.title);

export const testimonials: Testimonial[] = [
  {
    quote:
      'Visualix Studio helped us turn technical work into a story people could actually feel. The film looked premium and still felt honest.',
    name: 'Industrial Client',
    role: 'Corporate Film Project',
  },
  {
    quote:
      'Their team understood the brief quickly, handled production smoothly, and delivered social-ready cuts without losing the core message.',
    name: 'Brand Partner',
    role: 'Content and Reels',
  },
  {
    quote:
      'The final video gave our event the scale it deserved. From camera work to editing, the whole experience felt professional.',
    name: 'Campus Collaboration',
    role: 'Event Coverage',
  },
];

export const stats: Stat[] = [
  { value: '50+', label: 'Industrial Clients' },
  { value: '200+', label: 'Corporate Films' },
  { value: '100+', label: 'Drone Projects' },
  { value: '5+', label: 'Years Experience' },
];

export const contactDetails: ContactDetail[] = [
  {
    icon: Phone,
    title: 'Call Us',
    body: 'Speak directly with our creative team',
    detail: phoneDisplay,
    href: phoneHref,
  },
  {
    icon: Mail,
    title: 'Email Us',
    body: 'Get detailed quotes and project discussions',
    detail: emailAddress,
    href: `mailto:${emailAddress}`,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    body: 'Quick responses and instant communication',
    detail: 'Chat with us on WhatsApp',
    href: whatsappHref,
  },
  {
    icon: MapPin,
    title: 'Visit Our Studio',
    body: 'Come see our setup and discuss your project',
    detail: 'CSJMIF First Floor, Kanpur University, Kanpur, Uttar Pradesh',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    body: "We're available when you need us",
    detail: 'Monday to Saturday, 10 AM - 7 PM',
  },
];

export const footerServices = [
  'Fashion Shoots',
  'Advertisement Films',
  'Drone Services',
  'Real Estate Videos',
  'Podcast Production',
];

export const footerLinks: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Services', href: '#services' },
];

export const footerContacts: FooterContactDetail[] = [
  { icon: Phone, label: 'Call Us', value: phoneDisplay },
  { icon: Mail, label: 'Email Us', value: emailAddress },
  { icon: MapPin, label: 'Visit Studio', value: 'Kanpur University, UP' },
];
