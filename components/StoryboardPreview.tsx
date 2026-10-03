// The hero's one memorable element: a script becoming a timeline of shots,
// with a playhead sweeping across. Pure CSS, no images, no JS.
const lines = [
  { text: "Cold open: the empty studio at 6am.", shot: "Wide", len: "w-2/5" },
  { text: "I spent a year filming the wrong things.", shot: "Close-up", len: "w-1/5" },
  { text: "Here is the three-shot rule I use now.", shot: "B-roll", len: "w-2/5" },
];

export default function StoryboardPreview() {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-6" aria-hidden="true">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
        <ul className="space-y-2 text-sm text-mist">
          {lines.map((l) => (
            <li key={l.text} className="rounded-lg bg-paper px-3 py-2">{l.text}</li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm font-semibold">
          {lines.map((l) => (
            <li key={l.shot} className="flex items-center justify-between rounded-lg bg-ink px-3 py-2 text-white">
              <span>{l.shot}</span>
              <span className="text-xs font-normal text-white/60">shot</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-5 flex h-12 gap-1 overflow-hidden rounded-lg bg-paper p-1">
        {lines.map((l, i) => (
          <div key={i} className={`${l.len} rounded-md ${i === 1 ? "bg-cobalt" : "bg-ink/80"}`} />
        ))}
        <div className="absolute inset-y-0 w-0.5 bg-signal motion-safe:animate-sweep" />
      </div>
    </div>
  );
}
