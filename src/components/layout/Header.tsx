import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/siteData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
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
  );
}
