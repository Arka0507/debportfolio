"use client";

import React from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { RESUME_DATA } from "@/data/resume";

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* SECTION HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <div
            data-build="type"
            className="font-mono text-xs text-[#ff3b2f] tracking-wider uppercase mb-2 flex items-center gap-2"
          >
            <span>01 // PORTFOLIO SHOWCASE</span>
          </div>
          <h2
            data-build="wipe"
            className="font-anton text-4xl sm:text-6xl text-white uppercase tracking-tight"
          >
            Work that ships
          </h2>
          <p
            data-build="type"
            className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3 font-sans"
          >
            Data analytics models, commercial KPI dashboards, and computer vision systems engineered strictly from real-world datasets.
          </p>
        </div>

        {/* 3 STATS ON THE RIGHT */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-800">
          {RESUME_DATA.workStats.map((st, i) => (
            <div key={i} data-build="pop" className="flex flex-col">
              <span className="font-anton text-2xl sm:text-3xl text-white">
                {st.value}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT CARDS (NO SCREENSHOTS, TEXT-FOCUSED PREMIUM CARDS) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {RESUME_DATA.projects.map((proj, idx) => (
          <div
            key={idx}
            data-build="pop"
            className="bg-[#121215] border border-zinc-800/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Top Meta & Featured Stat */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono uppercase text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                  PROJECT 0{idx + 1}
                </span>
                {proj.featuredStat && (
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-400 block">
                      {proj.featuredStat.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#ff3b2f]">
                      {proj.featuredStat.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-anton text-2xl text-white tracking-wide uppercase group-hover:text-zinc-100 transition-colors">
                {proj.title}
              </h3>
              <div className="text-xs font-mono text-[#ff3b2f] mb-5 font-medium">
                {proj.subtitle}
              </div>

              {/* 3 to 4 Bullet Points from Resume */}
              <ul className="space-y-3 mb-6">
                {proj.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3b2f] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80 mb-5">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-1.5 !px-3 text-xs w-full justify-center group/btn"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                  <span>Inspect Code</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/btn:text-zinc-300 transition-colors ml-auto" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
