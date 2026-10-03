import Container from "./Container";
import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-cobalt p-8 text-white sm:p-12 md:flex-row md:items-center">
          <h2 className="max-w-md text-3xl font-bold">Your next video already has a script. Plan it now.</h2>
          <a href="#pricing" className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 text-sm font-semibold text-ink hover:bg-signal">
            Start free
          </a>
        </div>
      </Container>
    </section>
  );
}
