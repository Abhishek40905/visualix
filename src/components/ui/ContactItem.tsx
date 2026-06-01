import type { LucideIcon } from 'lucide-react';

type ContactItemProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  detail: string;
  href?: string;
};

export function ContactItem({ icon: Icon, title, body, detail, href }: ContactItemProps) {
  const content = <span className="font-black text-orange-400">{detail}</span>;

  return (
    <div className="flex gap-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px] bg-orange-500 text-white">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-2xl font-black">{title}</h3>
        <p className="mt-2 text-lg text-slate-300">{body}</p>
        {href ? (
          <a href={href} className="mt-2 inline-block transition hover:text-orange-300">
            {content}
          </a>
        ) : (
          <p className="mt-2 max-w-md text-orange-400">{detail}</p>
        )}
      </div>
    </div>
  );
}
