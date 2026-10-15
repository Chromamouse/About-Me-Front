type SkillTagProps = {
  label: string;
};

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="rounded-full border border-neutral-700 px-5 py-3 font-mono text-sm text-neutral-300 transition hover:border-neutral-400 hover:bg-neutral-800">
      {label}
    </span>
  );
}
