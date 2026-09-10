const columns = [
  {
    heading: "Catalog",
    links: [{ label: "Full catalog", href: "#tools" }],
  },
  {
    heading: "Studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="blueprint-bg bg-bg pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-hairline pb-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <span className="font-display text-lg font-semibold text-ink">NovaWing</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Model kits, RC airframes, FPV drone parts, and the workshop
              tools and materials that go into finishing every build.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-medium text-ink">{col.heading}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NovaWing Aerospace.</p>
          <p className="font-mono">Design preview, spec sheets subject to revision.</p>
        </div>
      </div>
    </footer>
  );
}
