import Container from "./Container";
import SectionHeading from "./SectionHeading";

// Numbered because this content really is a sequence.
const steps = [
  { title: "Paste your script", body: "Drop in plain text. No formatting needed." },
  { title: "Review the plan", body: "Edit shots, reorder scenes and swap b-roll." },
  { title: "Export and shoot", body: "Take the checklist to set and tick shots off." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 bg-ink py-16 text-white sm:py-20">
      <Container>
        <SectionHeading title="From script to set in three steps" />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal font-display font-bold text-ink">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
