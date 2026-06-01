import { ArrowRight, Award, Phone } from 'lucide-react';
import { phoneDisplay, phoneHref } from '../../data/siteData';

const focusAreas = ['Production Planning', 'Client Coordination', 'Visual Quality'];

export function CofounderSection() {
  return (
    <section className="bg-slate-50 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-6 py-2 text-sm font-bold text-orange-600">
            <Award size={17} />
            Co-Founder
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-normal text-black md:text-5xl">Meet Our Leadership</h2>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
          <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
            <div className="mx-auto w-full max-w-[400px]">
              <img
                src="/ap_mishra.jpeg"
                alt="Ajay Prakash Mishra"
                className="aspect-[4/5] w-full rounded-[8px] object-cover object-center shadow-2xl shadow-slate-300"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-black leading-tight tracking-normal text-black md:text-5xl">
                Ajay Prakash Mishra
              </h3>
              <p className="mt-3 text-xl font-bold text-orange-600">Co-Founder, Visualix Studio</p>
              <h4 className="mt-8 text-3xl font-black leading-tight tracking-normal text-black md:text-4xl">
                Building polished visual stories with clear execution.
              </h4>
              <p className="mt-8 text-xl leading-relaxed text-slate-700">
                Ajay Prakash Mishra helps drive the studio's production planning, client coordination, and on-ground
                execution. He brings a practical creative approach to every project, making sure each shoot is organized,
                purposeful, and aligned with the brand's story.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-slate-700">
                His focus is simple: understand the client's message, keep the production process smooth, and deliver
                visuals that feel professional, confident, and ready for today's digital platforms.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {focusAreas.map((item) => (
                  <div key={item} className="rounded-[8px] border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-base font-black text-slate-950">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-base font-black text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  <Phone size={20} />
                  Call {phoneDisplay}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 px-7 py-4 text-base font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-orange-600"
                >
                  Book a Shoot
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
