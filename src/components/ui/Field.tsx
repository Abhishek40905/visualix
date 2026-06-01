type FieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
};

export function Field({ label, placeholder, type = 'text' }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-300">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-slate-600 bg-slate-950/60 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-orange-400"
      />
    </label>
  );
}
