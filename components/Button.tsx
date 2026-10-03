type Props = { href: string; variant?: "primary" | "secondary"; children: React.ReactNode; className?: string };

const styles = {
  primary: "bg-cobalt text-white hover:bg-cobalt-dark",
  secondary: "border border-ink/20 text-ink hover:bg-ink hover:text-white",
};

export default function Button({ href, variant = "primary", children, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
