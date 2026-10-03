export default function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="border-t-2 border-ink pt-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-mist">{body}</p>
    </article>
  );
}
