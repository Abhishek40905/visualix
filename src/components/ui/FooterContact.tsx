import type { LucideIcon } from 'lucide-react';

type FooterContactProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export function FooterContact({ icon: Icon, label, value }: FooterContactProps) {
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
