"use client";

import React from "react";
import { Terminal, Cpu } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function StackSection() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...RESUME_DATA.stackMarquee, ...RESUME_DATA.stackMarquee];

  return (
    <section id="stack" className="py-20 border-t border-zinc-900 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div
              data-build="type"
              className="font-mono text-xs text-[#ff3b2f] tracking-wider uppercase mb-2 flex items-center gap-2"
            >
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2
              data-build="wipe"
              className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight"
            >
              Tools &amp; Technologies
            </h2>
          </div>
          <p
            data-build="type"
            className="text-xs font-mono text-zinc-400 max-w-xs"
          >
            All languages, frameworks, libraries, and analytical environments certified &amp; deployed in production models.
          </p>
        </div>
      </div>

      {/* ENDLESS MARQUEE (MOVING LEFT TO RIGHT, FADED EDGES, PAUSES ON HOVER) */}
      <div
        data-build="pop"
        className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div
          className="flex gap-4 w-max hover:[animation-play-state:paused]"
          style={{
            animation: "marqueeLTR 42s linear infinite",
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#121215] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#ff3b2f]/80 hover:bg-zinc-900/90 transition-all cursor-default select-none shadow-sm group"
            >
              <Cpu className="w-3.5 h-3.5 text-[#ff3b2f] opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-xs font-semibold whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900/90 px-1.5 py-0.5 rounded border border-zinc-800 group-hover:text-zinc-300">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLTR {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}

