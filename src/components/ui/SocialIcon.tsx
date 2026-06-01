import type { LucideIcon } from 'lucide-react';

type SocialIconProps = {
  icon: LucideIcon;
  label: string;
};

export function SocialIcon({ icon: Icon, label }: SocialIconProps) {
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
