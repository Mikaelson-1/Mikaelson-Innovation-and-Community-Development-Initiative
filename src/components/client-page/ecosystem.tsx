"use client";

import { motion } from "motion/react";
import { ecosystems } from "./data";

// Shared card internals — reused on both mobile and desktop
function EcoCard({
  eco,
  bullet,
  index,
}: {
  eco: (typeof ecosystems)[0];
  bullet: string;
  index: number;
}) {
  return (
    <>
      {/* glow */}
      <div
        className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.30) 0%, transparent 70%)",
        }}
      />
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#0097a7 1px, transparent 1px), linear-gradient(90deg, #0097a7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* big number */}
      <div
        className="absolute text-[#C9A84C]/40 top-4 left-6 font-black leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(80px, 10vw, 160px)", letterSpacing: "-0.05em" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      {/* content */}
      <div className="relative z-10 max-w-2xl">
        <p className="text-[#0097a7] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
          {eco.label} · Point {index + 1}
        </p>
        <p
          className="font-bold mb-8 leading-[1.3] tracking-[-0.02em] text-[#050a0a]"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)" }}
        >
          {bullet}
        </p>
      </div>
      {/* bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
          opacity: 0.4,
        }}
      />
    </>
  );
}

export function EcosystemBlock({ eco }: { eco: (typeof ecosystems)[0] }) {
  return (
    <div className="w-full px-4 md:px-6">
      {/* Mobile: stacked cards */}
      <div className="md:hidden flex flex-col gap-3 pb-10">
        {eco.bullets.map((bullet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            className="relative rounded-2xl border border-[#5CE1E6]/30 bg-[#d0f4f6] text-[#050a0a] overflow-hidden p-6 flex flex-col justify-end"
            style={{ minHeight: "160px" }}
          >
            <EcoCard eco={eco} bullet={bullet} index={i} />
          </motion.div>
        ))}
      </div>

      {/* Desktop: flowing cards with staggered whileInView — no GSAP, no forced reflow */}
      <div className="hidden md:flex flex-col gap-5 w-full max-w-6xl mx-auto">
        {eco.bullets.map((bullet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
            className="relative rounded-3xl border border-[#5CE1E6]/60 p-12 flex flex-col justify-end bg-[#d0f4f6] text-[#050a0a] overflow-hidden"
            style={{ minHeight: "280px" }}
          >
            <EcoCard eco={eco} bullet={bullet} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function EcosystemSection({
  activeIndex,
}: {
  activeIndex: number;
}) {
  return (
    <div className="w-full py-4">
      <EcosystemBlock eco={ecosystems[activeIndex]} />
    </div>
  );
}
