import Button from "./Button";

type Props = { name: string; price: string; note: string; perks: string[]; featured?: boolean };

export default function PricingCard({ name, price, note, perks, featured }: Props) {
  return (
    <article className={`flex flex-col rounded-2xl p-6 sm:p-8 ${featured ? "bg-ink text-white" : "border border-line bg-white"}`}>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-4 font-display text-5xl font-extrabold">{price}</p>
      <p className={`mt-1 text-sm ${featured ? "text-white/70" : "text-mist"}`}>{note}</p>
      <ul className="mt-6 flex-1 space-y-2">
        {perks.map((p) => <li key={p}>✓ {p}</li>)}
      </ul>
      <Button href="#" variant={featured ? "primary" : "secondary"} className="mt-8">
        {featured ? "Start 14-day trial" : "Start free"}
      </Button>
    </article>
  );
}
