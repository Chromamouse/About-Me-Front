type LinkButtonProps = {
  label: string;
  href: string;
  external?: boolean;
};

export function LinkButton({ label, href, external = false }: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="rounded-full border border-neutral-100 px-6 py-3 font-mono text-sm text-neutral-300 transition hover:border-neutral-400"
    >
      {label}
    </a>
  );
}
