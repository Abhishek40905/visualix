import { CheckCircle2, Video } from 'lucide-react';
import { services } from '../../data/siteData';

export function ServicesSection() {
  return (
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
  );
}
