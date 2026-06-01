import React from 'react';
import {
  ArrowRight,
  Award,
  Camera,
  CheckCircle2,
  Clock,
  Facebook,
  Factory,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Rocket,
  Star,
  TrendingUp,
  Users,
  Video,
  X,
  Youtube,
  Zap,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
];

const clientVideos = [
  { name: 'JIO BP', src: '/jio_bp.MP4' },
  { name: 'CSJMIF', src: '/Intro_Csjmif.mp4' },
  { name: 'Ottoclick', src: '/intro_ottoclick.mp4' },
  { name: 'Slogfy', src: '/Intro_Slogfy.mp4' },
  { name: 'EHM', src: '/ehm_intro.mp4' },
];

const collaborations = [
  { name: 'JIO BP', image: '/jio_bp.png' },
  { name: 'CSJMU', image: '/csjmu.PNG' },
  { name: 'CSJMIF', image: '/csjmif.PNG' },
  { name: 'Ottoclick', image: '/ottoclick.JPG' },
  { name: 'Slogfy', image: '/slogfy.jpg' },
  { name: 'B-fitt', image: '/b-fit.JPG' },
  { name: 'One rep max', image: '/one_rep_max.JPG' },
];

const services = [
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

const testimonials = [
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

const stats = [
  { value: '50+', label: 'Industrial Clients' },
  { value: '200+', label: 'Corporate Films' },
  { value: '100+', label: 'Drone Projects' },
  { value: '5+', label: 'Years Experience' },
];

const serviceOptions = services.map((service) => service.title);

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1520px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/logo.png" alt="Visualix Studio Logo" className="h-12 w-12 rounded-xl object-contain" />
            <span className="text-xl font-semibold tracking-normal text-slate-950">Visualix Studio</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-slate-700 transition duration-300 hover:text-orange-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-orange-500 px-8 py-3 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 md:inline-flex"
          >
            Book a Shoot
          </a>

          <button
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center font-bold text-white"
              >
                Book a Shoot
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-noise relative isolate min-h-screen overflow-hidden bg-slate-950 pt-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.20),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(249,115,22,0.16),transparent_30%),linear-gradient(115deg,#110804_0%,#12121b_48%,#05080d_100%)]" />
          <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute right-6 top-52 hidden text-orange-500/35 lg:block">
            <Zap size={32} />
          </div>
          <div className="absolute left-1/4 top-56 hidden text-orange-500/30 md:block">
            <Camera size={42} />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1360px] flex-col items-center justify-center px-5 py-12 text-center sm:px-8 lg:py-16">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/45 bg-orange-500/20 px-8 py-3 text-base font-bold text-orange-200 shadow-xl shadow-orange-950/30 md:mb-12">
              <Star size={18} className="text-orange-400" />
              Visual Storytellers
            </div>

            <h1 className="max-w-6xl text-5xl font-black leading-[1.03] tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
              Crafting Visual Stories
              <span className="block text-orange-500">That Inspire</span>
            </h1>

            <p className="mt-8 max-w-5xl text-xl font-medium leading-relaxed text-slate-300 md:mt-10 md:text-2xl">
              We help future-ready industries and businesses amplify their story through cinematic visuals, social media
              content, aerial storytelling, and digital strategy. From LinkedIn to large-format documentaries, we create
              impactful content that builds trust, visibility, and long-term value.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-12 py-5 text-xl font-bold text-white shadow-2xl shadow-orange-500/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 md:mt-12"
            >
              Book Your Shoot
              <ArrowRight size={24} />
            </a>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto grid max-w-[1360px] items-center gap-16 lg:grid-cols-[0.95fr_1fr]">
            <div>
              <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-orange-100 px-7 py-3 text-base font-bold text-orange-600">
                <Users size={18} />
                About Visualix Studio
              </div>

              <h2 className="text-5xl font-black leading-tight tracking-normal text-black md:text-6xl">Your Vision, Our Lens</h2>

              <div className="mt-10 space-y-8 text-2xl leading-relaxed text-slate-700">
                <p>
                  Founded by <strong>Siddhant Kharwar</strong>, Visualix Studio was born from a passion for capturing
                  powerful moments and transforming them into cinematic masterpieces.
                </p>
                <p>
                  From high-impact commercial campaigns to compelling visual storytelling, our team blends creative vision
                  with cutting-edge technology.
                </p>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 text-3xl font-black text-black">
                    <Camera className="text-orange-500" size={30} />
                    500+
                  </div>
                  <p className="mt-4 text-xl text-slate-700">Events Captured</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-3xl font-black text-black">
                    <Award className="text-orange-500" size={30} />
                    50+
                  </div>
                  <p className="mt-4 text-xl text-slate-700">Brand Collaborations</p>
                </div>
              </div>

              <div className="mt-12 rounded-[8px] bg-slate-50 p-8">
                <h3 className="text-2xl font-black text-black">Our Mission</h3>
                <p className="mt-6 text-xl leading-relaxed text-slate-700">
                  To create visual narratives that not only capture moments but evoke emotions, tell stories, and preserve
                  memories that last a lifetime.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -left-8 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-white shadow-xl sm:block" />
              <div className="absolute -right-8 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-white shadow-xl sm:block" />
              <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/80">
                <video
                  className="aspect-[9/16] w-full rounded-[14px] bg-slate-950 object-cover"
                  src="/reel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white px-5 pb-24 sm:px-8 lg:pb-32">
          <div className="mx-auto max-w-[1360px]">
            <div className="text-center">
              <h2 className="text-5xl font-black tracking-normal text-black md:text-6xl">Our Clients</h2>
              <p className="mt-6 text-2xl text-slate-700">
                A selection of video projects created in collaboration with our clients.
              </p>
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {clientVideos.map((client) => (
                <article
                  key={client.name}
                  className="overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-orange-200/60"
                >
                  <video
                    className="aspect-video w-full bg-slate-900 object-cover"
                    src={client.src}
                    controls
                    muted
                    preload="metadata"
                    playsInline
                  />
                  <h3 className="px-6 py-6 text-2xl font-black text-black">{client.name}</h3>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-28 max-w-5xl text-center text-2xl text-slate-700">
              We've had the privilege of collaborating with some amazing brands and organizations.
            </p>

            <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-16 sm:grid-cols-3 lg:grid-cols-4">
              {collaborations.map((brand) => (
                <div key={brand.name} className="group text-center">
                  <div className="mx-auto flex h-28 max-w-[220px] items-center justify-center">
                    <img
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      className="brand-logo max-h-24 max-w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-lg font-semibold text-slate-900">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1360px] items-center gap-12 rounded-[8px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 md:p-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="mx-auto flex h-72 w-full max-w-sm items-center justify-center rounded-[8px] bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white shadow-2xl shadow-slate-300">
              <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-orange-300/40 bg-white/10 text-4xl font-black text-orange-300">
                  AM
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-orange-200">Co-Founder</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-6 py-2 text-sm font-bold text-orange-600">
                <Award size={17} />
                Leadership
              </div>
              <h2 className="mt-8 text-4xl font-black leading-tight tracking-normal text-black md:text-5xl">
                Ajay Prakash Mishra
              </h2>
              <p className="mt-3 text-xl font-bold text-orange-600">Co-Founder, Visualix Studio</p>
              <p className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-700">
                Ajay Prakash Mishra brings a steady creative eye and a practical understanding of client needs to
                Visualix Studio. His work focuses on shaping production workflows, maintaining visual quality, and
                helping brands communicate their story with clarity and confidence.
              </p>
              <p className="mt-6 max-w-4xl text-xl leading-relaxed text-slate-700">
                From planning shoots to coordinating on-ground execution, he supports the team in delivering professional
                films, reels, and brand content that feel polished, purposeful, and true to each client.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {['Creative Direction', 'Production Planning', 'Client Coordination'].map((item) => (
                  <div key={item} className="rounded-[8px] border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-base font-black text-slate-950">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="dark-section px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="mx-auto max-w-[1360px]">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-6 py-2 text-base font-bold text-orange-300">
                <Video size={18} />
                Services
              </div>
              <h2 className="text-5xl font-black tracking-normal md:text-6xl">Built for Industrial Storytelling</h2>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`service-card group ${service.featured ? 'service-card-featured' : ''}`}
                >
                  <div className={`service-icon service-icon-${service.tone}`}>
                    <service.icon size={36} />
                  </div>
                  <h3 className="mt-10 text-3xl font-black leading-tight">{service.title}</h3>
                  <p className="mt-8 text-xl font-medium leading-relaxed text-slate-300">{service.description}</p>
                  <ul className="mt-10 space-y-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-4 text-base font-medium text-slate-400">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-orange-400" size={21} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section px-5 pb-24 text-white sm:px-8 lg:pb-32">
          <div className="mx-auto max-w-[1360px]">
            <div className="rounded-[28px] bg-gradient-to-br from-orange-400 to-orange-600 px-8 py-16 text-center shadow-2xl shadow-orange-950/40 lg:px-20">
              <h2 className="text-4xl font-black tracking-normal md:text-6xl">
                Ready to Amplify Your Industrial Story?
              </h2>
              <p className="mx-auto mt-8 max-w-5xl text-2xl leading-relaxed text-white/95">
                From factory floors to boardrooms, we create visual content that builds trust, drives engagement, and
                showcases your industrial excellence to the world.
              </p>
              <a
                href="#contact"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-12 py-5 text-xl font-black text-orange-600 transition duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
              >
                Work With Us
                <ArrowRight size={24} />
              </a>
            </div>

            <div className="mt-24 grid grid-cols-2 gap-10 text-center md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-6xl font-black text-orange-400 md:text-7xl">{stat.value}</div>
                  <p className="mt-4 text-lg text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-[1360px]">
            <div className="text-center">
              <h2 className="text-5xl font-black tracking-normal text-black md:text-6xl">Client Words</h2>
              <p className="mt-6 text-2xl text-slate-700">Clear communication, cinematic delivery, and stories that travel.</p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-[8px] border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-100"
                >
                  <div className="flex gap-1 text-orange-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-8 text-xl leading-relaxed text-slate-700">"{testimonial.quote}"</p>
                  <div className="mt-10">
                    <p className="text-xl font-black text-black">{testimonial.name}</p>
                    <p className="mt-1 text-base font-semibold text-orange-600">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="dark-section px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="mx-auto max-w-[1360px]">
            <div className="text-center">
              <h2 className="text-5xl font-black leading-tight tracking-normal md:text-6xl">
                Ready to Create Something Amazing?
              </h2>
              <p className="mx-auto mt-8 max-w-4xl text-2xl leading-relaxed text-slate-200">
                Let's discuss your vision and bring it to life. Schedule a free consultation to explore how we can capture
                your story.
              </p>
            </div>

            <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-10">
                <ContactItem
                  icon={Phone}
                  title="Call Us"
                  body="Speak directly with our creative team"
                  detail="+91 99189 50267"
                  href="tel:+919918950267"
                />
                <ContactItem
                  icon={Mail}
                  title="Email Us"
                  body="Get detailed quotes and project discussions"
                  detail="visualixstudioofficial@gmail.com"
                  href="mailto:visualixstudioofficial@gmail.com"
                />
                <ContactItem
                  icon={MessageCircle}
                  title="WhatsApp"
                  body="Quick responses and instant communication"
                  detail="Chat with us on WhatsApp"
                  href="https://wa.me/919918950267"
                />
                <ContactItem
                  icon={MapPin}
                  title="Visit Our Studio"
                  body="Come see our setup and discuss your project"
                  detail="CSJMIF First Floor, Kanpur University, Kanpur, Uttar Pradesh"
                />
                <ContactItem
                  icon={Clock}
                  title="Office Hours"
                  body="We're available when you need us"
                  detail="Monday to Saturday, 10 AM - 7 PM"
                />
              </div>

              <form className="rounded-[28px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/40 backdrop-blur lg:p-10">
                <h3 className="text-3xl font-black">Book Your Shoot</h3>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <Field label="First Name *" placeholder="Your first name" />
                  <Field label="Last Name *" placeholder="Your last name" />
                </div>
                <div className="mt-6">
                  <Field label="Phone Number *" placeholder="+91 98765 43210" type="tel" />
                </div>
                <div className="mt-6">
                  <Field label="Email Address *" placeholder="your@email.com" type="email" />
                </div>
                <label className="mt-6 block">
                  <span className="text-sm font-bold text-slate-300">Service Interested In *</span>
                  <select className="mt-3 w-full rounded-xl border border-slate-600 bg-slate-950/60 px-5 py-4 text-white outline-none transition duration-300 focus:border-orange-400">
                    <option>Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <div className="mt-6">
                  <Field label="Event/Shoot Date" type="date" />
                </div>
                <label className="mt-6 block">
                  <span className="text-sm font-bold text-slate-300">Project Details</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="mt-3 w-full resize-none rounded-xl border border-slate-600 bg-slate-950/60 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-orange-400"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-5 text-lg font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Submit Booking Request
                  <ArrowRight size={22} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-16 border-b border-slate-800 pb-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-orange-500">
                  <Camera size={25} />
                </span>
                <h2 className="text-3xl font-black">Visualix Studio</h2>
              </div>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-400">
                Crafting visual stories that inspire. We bring your vision to life through the power of professional
                cinematography and photography.
              </p>
              <div className="mt-8 flex gap-4">
                <SocialIcon label="Instagram" icon={Instagram} />
                <SocialIcon label="YouTube" icon={Youtube} />
                <SocialIcon label="Facebook" icon={Facebook} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black">Services</h3>
              <ul className="mt-8 space-y-5 text-lg text-slate-400">
                <li>Fashion Shoots</li>
                <li>Advertisement Films</li>
                <li>Drone Services</li>
                <li>Real Estate Videos</li>
                <li>Podcast Production</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black">Quick Links</h3>
              <ul className="mt-8 space-y-5 text-lg text-slate-400">
                <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-orange-400">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-orange-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
                <li><a href="#services" className="hover:text-orange-400">Services</a></li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 border-b border-slate-800 py-10 md:grid-cols-3">
            <FooterContact icon={Phone} label="Call Us" value="+91 99189 50267" />
            <FooterContact icon={Mail} label="Email Us" value="visualixstudioofficial@gmail.com" />
            <FooterContact icon={MapPin} label="Visit Studio" value="Kanpur University, UP" />
          </div>

          <div className="flex flex-col gap-6 pt-10 text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Visualix Studio. All rights reserved. Made with love by Visualix Studio</p>
            <div className="flex flex-wrap gap-8">
              <a href="#" className="hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
              <a href="#" className="hover:text-orange-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

function ContactItem({
  icon: Icon,
  title,
  body,
  detail,
  href,
}: {
  icon: IconComponent;
  title: string;
  body: string;
  detail: string;
  href?: string;
}) {
  const content = <span className="font-black text-orange-400">{detail}</span>;

  return (
    <div className="flex gap-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px] bg-orange-500 text-white">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-2xl font-black">{title}</h3>
        <p className="mt-2 text-lg text-slate-300">{body}</p>
        {href ? (
          <a href={href} className="mt-2 inline-block transition hover:text-orange-300">
            {content}
          </a>
        ) : (
          <p className="mt-2 max-w-md text-orange-400">{detail}</p>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-300">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-slate-600 bg-slate-950/60 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-orange-400"
      />
    </label>
  );
}

function SocialIcon({ icon: Icon, label }: { icon: IconComponent; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
    >
      <Icon size={23} />
    </a>
  );
}

function FooterContact({ icon: Icon, label, value }: { icon: IconComponent; label: string; value: string }) {
  return (
    <div className="flex items-center gap-5">
      <Icon className="text-orange-500" size={24} />
      <div>
        <p className="text-slate-400">{label}</p>
        <p className="text-lg text-white">{value}</p>
      </div>
    </div>
  );
}

export default App;
