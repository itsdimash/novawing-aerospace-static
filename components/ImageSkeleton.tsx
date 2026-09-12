export default function ImageSkeleton() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-surface2">
      <div className="shimmer-sweep" />
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        className="relative animate-pulse text-blueprint-dim"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5Z" />
      </svg>
    </div>
  );
}
