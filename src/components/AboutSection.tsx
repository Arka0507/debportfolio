"use client";

import React from "react";
import { ShieldCheck, Compass, Lightbulb, Zap, Code2, Database, LineChart, Cpu, Globe2, Wrench } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function AboutSection() {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#ff3b2f]" />;
      case 1:
        return <Database className="w-4 h-4 text-sky-400" />;
      case 2:
        return <LineChart className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 4:
        return <Globe2 className="w-4 h-4 text-purple-400" />;
      case 5:
        return <Wrench className="w-4 h-4 text-teal-400" />;
      default:
        return <Code2 className="w-4 h-4 text-[#ff3b2f]" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* SECTION HEADER */}
      <div className="mb-14">
        <div
          data-build="type"
          className="font-mono text-xs text-[#ff3b2f] tracking-wider uppercase mb-2 flex items-center gap-2"
        >
          <span>04 // BACKGROUND &amp; PHILOSOPHY</span>
        </div>
        <h2
          data-build="wipe"
          className="font-anton text-4xl sm:text-6xl text-white uppercase tracking-tight"
        >
          About &amp; Principles
        </h2>
      </div>

      {/* 2 SHORT PARAGRAPHS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          data-build="pop"
          className="bg-[#121215] border border-zinc-800/90 rounded-xl p-6 sm:p-7 relative overflow-hidden"
        >
          <div className="w-1 h-8 bg-[#ff3b2f] absolute top-6 left-0 rounded-r" />
          <h3 className="font-anton text-xl text-white uppercase mb-3 tracking-wide">
            Foundations &amp; Expertise
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
            {RESUME_DATA.summary.aboutP1}
          </p>
        </div>

        <div
          data-build="pop"
          className="bg-[#121215] border border-zinc-800/90 rounded-xl p-6 sm:p-7 relative overflow-hidden"
        >
          <div className="w-1 h-8 bg-zinc-600 absolute top-6 left-0 rounded-r" />
          <h3 className="font-anton text-xl text-white uppercase mb-3 tracking-wide">
            Applied Impact &amp; Readiness
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
            {RESUME_DATA.summary.aboutP2}
          </p>
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="mb-20">
        <div className="mb-6">
          <span
            data-build="type"
            className="font-mono text-xs text-zinc-400 uppercase tracking-wider block"
          >
            Technical Competencies Matrix
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESUME_DATA.skillsCategorized.map((cat, idx) => (
            <div
              key={idx}
              data-build="pop"
              className="bg-[#121215] border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-zinc-800/70">
                {getCategoryIcon(idx)}
                <h4 className="font-anton text-lg text-white uppercase tracking-wide">
                  {cat.title}
                </h4>
              </div>

              <div className="space-y-2">
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between text-xs py-1 border-b border-zinc-900/60 last:border-0"
                  >
                    <span className="font-mono text-zinc-200 font-medium">{s.name}</span>
                    {s.proficiency && (
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {s.proficiency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 PRINCIPLES I WORK BY */}
      <div>
        <div className="mb-8">
          <span
            data-build="type"
            className="font-mono text-xs text-[#ff3b2f] uppercase tracking-wider block mb-1"
          >
            Core Engineering Tenets
          </span>
          <h3
            data-build="wipe"
            className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-tight"
          >
            4 Principles I Work By
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESUME_DATA.principles.map((p, idx) => (
            <div
              key={idx}
              data-build="pop"
              className="bg-[#121215] border border-zinc-800/80 rounded-xl p-6 relative flex flex-col justify-between hover:border-zinc-700 hover:shadow-lg transition-all"
            >
              <div>
                <span className="font-anton text-3xl text-zinc-800 block mb-3 group-hover:text-zinc-700 transition-colors">
                  0{idx + 1}
                </span>
                <h4 className="font-anton text-xl text-white uppercase tracking-wide mb-2.5">
                  {p.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>
              <div className="w-full h-0.5 bg-zinc-850 mt-5 pt-0.5">
                <div className="w-8 h-0.5 bg-[#ff3b2f]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
