"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { audience } from "./data";

export default function WhoItsFor() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:px-10 bg-white dark:bg-[#050a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* left: title + accordion */}
          <div className="flex flex-col gap-10">

            <div>
              <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Our Audience
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#111] dark:text-white">
                Who We Serve
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {audience.map((item, i) => {
                const isActive = active === i;
                return (
                  <motion.div
                    key={item.number}
                    layout
                    onClick={() => setActive(i)}
                    className={`cursor-pointer rounded-2xl border transition-colors duration-200 overflow-hidden ${
                      isActive
                        ? "border-[#5CE1E6] bg-white dark:bg-white/[0.04]"
                        : "border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-transparent hover:border-[#5CE1E6]/40"
                    }`}
                  >
                    <div className="flex items-center gap-4 px-5 py-4">
                      <span className="text-[10px] font-bold text-[#5CE1E6] tracking-[0.18em] w-5 shrink-0">
                        {item.number}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isActive
                            ? "bg-[#5CE1E6] text-black"
                            : "bg-black/[0.05] dark:bg-white/[0.06] text-[#555] dark:text-white/50"
                        }`}
                      >
                        <item.icon size={16} strokeWidth={2} />
                      </div>
                      <span
                        className={`flex-1 font-bold text-[15px] transition-colors duration-200 ${
                          isActive
                            ? "text-[#111] dark:text-white"
                            : "text-[#333] dark:text-white/70"
                        }`}
                      >
                        {item.title}
                      </span>
                      {isActive ? (
                        <ChevronDown size={15} className="text-[#5CE1E6] shrink-0" />
                      ) : (
                        <ChevronRight size={15} className="text-[#aaa] dark:text-white/30 shrink-0" />
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p
                            className="px-5 pb-5 text-sm text-[#555] dark:text-white/50 leading-relaxed"
                            style={{ paddingLeft: "4.25rem" }}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* right: image — top aligns with the title */}
          <div
            className="relative rounded-2xl overflow-hidden lg:sticky lg:top-24"
            style={{ aspectRatio: "4/5" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={audience[active].image}
                  alt={audience[active].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) calc(100vw - 40px), 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[#5CE1E6] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">
                    Who We Serve
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-extrabold tracking-tight leading-snug">
                    {audience[active].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
