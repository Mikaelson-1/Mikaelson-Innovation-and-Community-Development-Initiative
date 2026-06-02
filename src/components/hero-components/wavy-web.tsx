// Pure CSS background — replaces the canvas RAF loop that was running
// heavy draw calls every 16ms and dominating mobile main-thread time.
export default function WavyBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #e8f8f9 0%, #d0f4f6 45%, #b8eef1 100%)",
        }}
      />
      {/* Radial bloom — top-right accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 78% 18%, rgba(92,225,230,0.22) 0%, transparent 100%)",
        }}
      />
      {/* Subtle bottom-left softening */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 10% 85%, rgba(92,225,230,0.10) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
