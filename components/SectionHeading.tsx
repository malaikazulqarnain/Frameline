export default function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-mist">{intro}</p>}
    </div>
  );
}
