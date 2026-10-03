"use client";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-display text-xl font-extrabold">Frameline</a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-mist hover:text-ink">{l.label}</a>
          ))}
          <Button href="#pricing">Start free</Button>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-medium hover:bg-white">
                {l.label}
              </a>
            ))}
            <Button href="#pricing" className="mt-2">Start free</Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
