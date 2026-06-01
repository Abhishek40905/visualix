import { ArrowRight } from 'lucide-react';
import { stats } from '../../data/siteData';

export function CtaStatsSection() {
  return (
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
  );
}
