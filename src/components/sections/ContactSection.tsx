import { ArrowRight } from 'lucide-react';
import { contactDetails, serviceOptions } from '../../data/siteData';
import { ContactItem } from '../ui/ContactItem';
import { Field } from '../ui/Field';

export function ContactSection() {
  return (
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
            {contactDetails.map((detail) => (
              <ContactItem key={detail.title} {...detail} />
            ))}
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
  );
}
