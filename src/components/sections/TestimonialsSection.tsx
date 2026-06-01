import { Star } from 'lucide-react';
import { testimonials } from '../../data/siteData';

export function TestimonialsSection() {
  return (
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
  );
}
