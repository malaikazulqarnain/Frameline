import Container from "./Container";
import Button from "./Button";
import StoryboardPreview from "./StoryboardPreview";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Paste your script. Get a shot list.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mist">
            Frameline reads your video script and plans every shot, b-roll cut and timing, so you
            spend filming days filming.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing">Start free</Button>
            <Button href="#how" variant="secondary">See how it works</Button>
          </div>
        </div>
        <StoryboardPreview />
      </Container>
    </section>
  );
}
