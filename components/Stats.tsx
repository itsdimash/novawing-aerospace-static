import AnimatedCounter from "./AnimatedCounter";

export default function Stats({ totalCount }: { totalCount: number }) {
  const stats = [
    {
      value: totalCount,
      suffix: "",
      label: "Items in the current catalog",
    },
    {
      value: 100,
      suffix: "%",
      label: "Specs verified before listing",
    },
    {
      value: 4,
      suffix: "",
      label: "Categories: kits, airframes, drone parts, tools",
    },
    {
      value: 4,
      suffix: "",
      label: "Brands stocked: SKYFORGE, CLAYO, RadioLink, HRB",
    },
  ];

  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-hairline border-hairline md:grid-cols-4 md:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-10">
            <div className="font-display text-4xl font-semibold text-ink">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 max-w-[18ch] text-sm leading-snug text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
