import Container from "./Container";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <SectionHeading title="Simple pricing" intro="Start free. Upgrade when you publish weekly." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:max-w-4xl">
          <PricingCard name="Starter" price="$0" note="Free forever" perks={["3 scripts per month", "Shot list export", "Basic b-roll ideas"]} />
          <PricingCard featured name="Creator" price="$12" note="per month" perks={["Unlimited scripts", "PDF and CSV export", "Timing estimates", "Priority support"]} />
        </div>
      </Container>
    </section>
  );
}
