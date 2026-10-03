import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

const features = [
  { title: "Shot list from any script", body: "Every line gets a suggested framing, camera move and on-screen action." },
  { title: "B-roll ideas that fit", body: "Get cutaway suggestions matched to what you are saying, not stock clichés." },
  { title: "Timing you can trust", body: "See estimated run time per scene before you pick up the camera." },
  { title: "Export anywhere", body: "Download as PDF, CSV or a checklist you can tick off on set." },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <SectionHeading title="Plan the whole shoot in one pass" intro="Everything you need between finishing the script and pressing record." />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </Container>
    </section>
  );
}
