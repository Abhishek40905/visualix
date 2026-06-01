import { Camera, Facebook, Instagram, Youtube } from 'lucide-react';
import { footerContacts, footerLinks, footerServices } from '../../data/siteData';
import { FooterContact } from '../ui/FooterContact';
import { SocialIcon } from '../ui/SocialIcon';

export function Footer() {
  return (
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
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black">Quick Links</h3>
            <ul className="mt-8 space-y-5 text-lg text-slate-400">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-orange-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 border-b border-slate-800 py-10 md:grid-cols-3">
          {footerContacts.map((contact) => (
            <FooterContact key={contact.label} {...contact} />
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-10 text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 Visualix Studio. All rights reserved. Made with love by Visualix Studio</p>
          <div className="flex flex-wrap gap-8">
            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-orange-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
