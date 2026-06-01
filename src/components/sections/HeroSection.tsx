import { ArrowRight, Camera, Star, Zap } from 'lucide-react';

export function HeroSection() {
  return (
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
  );
}
