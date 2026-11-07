"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, MapPin, Database, TrendingUp, BarChart3 } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-20 pb-16 px-4 sm:px-8 overflow-hidden bg-[#09090b]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b22_1px,transparent_1px),linear-gradient(to_bottom,#18181b22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* GIANT WORD "PORTFOLIO" in Anton with metallic gradient & slow sheen */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl select-none pointer-events-none z-10 flex items-center justify-center opacity-85"
        aria-hidden="true"
      >
        <div className="relative text-center w-full">
          <span className="portfolio-metallic-text text-[19vw] sm:text-[18vw] lg:text-[17vw] leading-none tracking-tight block uppercase">
            PORTFOLIO
          </span>
          <span className="portfolio-sheen-overlay text-[19vw] sm:text-[18vw] lg:text-[17vw] leading-none tracking-tight block uppercase font-anton">
            PORTFOLIO
          </span>
        </div>
      </div>

      {/* CENTER HEADSHOT WITH SOFT RED RADIAL GLOW & BOTTOM FADE */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-20 overflow-hidden">
        {/* Soft Red Radial Glow */}
        <div className="absolute bottom-4 w-[500px] sm:w-[650px] lg:w-[750px] h-[500px] sm:h-[650px] headshot-glow rounded-full blur-2xl opacity-90 -z-10" />

        {/* Headshot container */}
        <div className="relative w-[310px] sm:w-[420px] lg:w-[480px] h-[480px] sm:h-[620px] lg:h-[720px] flex items-end justify-center opacity-40 sm:opacity-60 lg:opacity-100 transition-opacity duration-300">
          <Image
            src="/headshot.png"
            alt="Arkadeb Das"
            fill
            priority
            sizes="(max-width: 640px) 310px, (max-width: 1024px) 420px, 480px"
            className="object-contain object-bottom headshot-bw"
          />
        </div>
      </div>

      {/* HERO FOREGROUND CONTENT GRID */}
      <div className="relative z-30 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-140px)]">
        {/* LEFT COLUMN: Hero introduction */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left pt-6 lg:pt-0 max-w-xl">
          {/* Handwritten greeting line */}
          <div
            data-build="wipe"
            className="font-caveat text-2xl sm:text-3xl text-zinc-300 mb-1 tracking-wide"
          >
            Hello, I&apos;m
          </div>

          {/* Huge Name in Anton */}
          <h1
            data-build="wipe"
            className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9] mb-3"
          >
            Arkadeb Das
          </h1>

          {/* Role in Accent Red */}
          <div
            data-build="pop"
            className="font-mono text-sm sm:text-base font-semibold text-[#ff3b2f] tracking-wide uppercase mb-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff3b2f] animate-ping" />
            <span data-build="type">{RESUME_DATA.role}</span>
          </div>

          {/* 2-line bio based strictly on resume */}
          <p
            data-build="type"
            className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-sans max-w-md"
          >
            {RESUME_DATA.summary.heroLine}
          </p>

          {/* CTAs & Based in line */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              data-build="pop"
              href="#work"
              className="btn-primary group"
            >
              <span>View work</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              data-build="pop"
              href="#contact"
              className="btn-secondary"
            >
              <span>Get in touch</span>
            </a>
          </div>

          {/* Based in line with green availability indicator */}
          <div
            data-build="pop"
            className="flex items-center gap-3 text-xs font-mono text-zinc-400 bg-zinc-950/80 px-3.5 py-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm"
          >
            <div className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#ff3b2f]" />
              <span>{RESUME_DATA.location}</span>
            </div>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Immediate Joiner</span>
            </div>
          </div>
        </div>

        {/* CENTER GAP (where the headshot stands) */}
        <div className="hidden lg:block lg:col-span-2" />

        {/* RIGHT COLUMN: 3 Real Stats from Resume */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 w-full">
          {/* Stat 1: 11,000+ Records */}
          <div
            data-build="pop"
            className="w-full sm:w-auto lg:w-[320px] bg-[#121215]/90 border border-zinc-800/90 rounded-xl p-4 sm:p-5 shadow-xl backdrop-blur-sm hover:border-zinc-700 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                Data Engineering
              </span>
              <Database className="w-4 h-4 text-[#ff3b2f]" />
            </div>
            <div className="font-anton text-3xl sm:text-4xl text-white tracking-wide">
              {RESUME_DATA.heroStats[0].value}
            </div>
            <div className="text-xs font-medium text-zinc-300 mt-1">
              {RESUME_DATA.heroStats[0].label}
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
              {RESUME_DATA.heroStats[0].detail}
            </div>
          </div>

          {/* Stat 2: ₹20.96 Cr Sales Analyzed */}
          <div
            data-build="pop"
            className="w-full sm:w-auto lg:w-[320px] bg-[#121215]/90 border border-zinc-800/90 rounded-xl p-4 sm:p-5 shadow-xl backdrop-blur-sm hover:border-zinc-700 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                Commercial Volume
              </span>
              <TrendingUp className="w-4 h-4 text-[#ff3b2f]" />
            </div>
            <div className="font-anton text-3xl sm:text-4xl text-white tracking-wide">
              {RESUME_DATA.heroStats[1].value}
            </div>
            <div className="text-xs font-medium text-zinc-300 mt-1">
              {RESUME_DATA.heroStats[1].label}
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
              {RESUME_DATA.heroStats[1].detail}
            </div>
          </div>

          {/* Stat 3: 1,095 IPL Matches */}
          <div
            data-build="pop"
            className="w-full sm:w-auto lg:w-[320px] bg-[#121215]/90 border border-zinc-800/90 rounded-xl p-4 sm:p-5 shadow-xl backdrop-blur-sm hover:border-zinc-700 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                Sports Analytics
              </span>
              <BarChart3 className="w-4 h-4 text-[#ff3b2f]" />
            </div>
            <div className="font-anton text-3xl sm:text-4xl text-white tracking-wide">
              {RESUME_DATA.heroStats[2].value}
            </div>
            <div className="text-xs font-medium text-zinc-300 mt-1">
              {RESUME_DATA.heroStats[2].label}
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
              {RESUME_DATA.heroStats[2].detail}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
