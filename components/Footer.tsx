import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-2 text-sm text-mist sm:flex-row sm:justify-between">
        <span className="font-display font-bold text-ink">Frameline</span>
        <span>Demo project. Built with Next.js and Tailwind CSS.</span>
      </Container>
    </footer>
  );
}
