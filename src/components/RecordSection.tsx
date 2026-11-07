"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, Trophy, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { RESUME_DATA, TimelineItem } from "@/data/resume";

export default function RecordSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems = RESUME_DATA.timeline.filter((item) => {
    if (filter === "all") return true;
    if (filter === "experience") return item.type === "experience";
    if (filter === "education") return item.type === "education";
    if (filter === "achievements") return item.type === "achievement" || item.type === "certification";
    return true;
  });

  const getIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "experience":
        return <Briefcase className="w-3.5 h-3.5 text-[#ff3b2f]" />;
      case "education":
        return <GraduationCap className="w-3.5 h-3.5 text-sky-400" />;
      case "achievement":
        return <Trophy className="w-3.5 h-3.5 text-amber-400" />;
      case "certification":
        return <Award className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 text-[#ff3b2f]" />;
    }
  };

  const getBadgeClass = (type: TimelineItem["type"]) => {
    switch (type) {
      case "experience":
        return "text-[#ff3b2f] border-[#ff3b2f]/30 bg-[#ff3b2f]/10";
      case "education":
        return "text-sky-400 border-sky-400/30 bg-sky-400/10";
      case "achievement":
        return "text-amber-400 border-amber-400/30 bg-amber-400/10";
      case "certification":
        return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
    }
  };

  return (
    <section id="record" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div
            data-build="type"
            className="font-mono text-xs text-[#ff3b2f] tracking-wider uppercase mb-2 flex items-center gap-2"
          >
            <span>03 // TRACK RECORD</span>
          </div>
          <h2
            data-build="wipe"
            className="font-anton text-4xl sm:text-6xl text-white uppercase tracking-tight"
          >
            Experience &amp; Milestones
          </h2>
          <p
            data-build="type"
            className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3 font-sans"
          >
            Chronological log of industry training, global academic immersions, hackathon achievements, and foundational degrees.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Records" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "achievements", label: "Global & Certs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all cursor-pointer border ${
                filter === tab.id
                  ? "bg-zinc-800 text-white border-zinc-600 shadow-sm"
                  : "bg-zinc-950 text-zinc-400 border-zinc-850 hover:text-zinc-200 hover:border-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative border-l border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            data-build="pop"
            className="relative group"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#121215] border border-zinc-700 flex items-center justify-center group-hover:border-[#ff3b2f] group-hover:scale-110 transition-all">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b2f]" />
            </div>

            {/* Content Box */}
            <div className="bg-[#121215] border border-zinc-800/80 rounded-xl p-5 sm:p-6 hover:border-zinc-700 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold border ${getBadgeClass(
                      item.type
                    )}`}
                  >
                    {getIcon(item.type)}
                    <span>{item.type}</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-300 font-medium">
                    {item.organization}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    <span>{item.period}</span>
                  </span>
                  {item.location && (
                    <span className="hidden sm:flex items-center gap-1 text-zinc-400">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Role Title */}
              <h3 className="font-anton text-xl sm:text-2xl text-white tracking-wide uppercase mb-2">
                {item.role}
              </h3>

              {/* Bullets or Credential */}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="space-y-2 mt-3">
                  {item.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3b2f] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.credential && (
                <div className="mt-3 text-xs font-mono text-zinc-400 flex items-center gap-2 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credential: {item.credential}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

