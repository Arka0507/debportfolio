"use client";

import React, { useState } from "react";
import { Mail, FileDown, Copy, Check, ArrowUpRight, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { RESUME_DATA } from "@/data/resume";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 bg-[#09090b]">
      {/* BIG CALL TO ACTION CARD */}
      <div
        data-build="pop"
        className="relative bg-gradient-to-b from-[#141418] to-[#0d0d10] border border-zinc-800 rounded-2xl p-8 sm:p-12 lg:p-16 mb-20 overflow-hidden shadow-2xl text-center"
      >
        {/* Subtle accent glow in background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#ff3b2f]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181b] border border-zinc-700/80 text-xs font-mono text-zinc-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available to join immediately • Entry-Level Candidate</span>
          </div>

          {/* Heading */}
          <h2
            data-build="wipe"
            className="font-anton text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95] mb-6"
          >
            Ready to turn raw data into decisive results
          </h2>

          <p
            data-build="type"
            className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-sans"
          >
            Looking for an entry-level Data Analyst or Data Scientist skilled in Python, SQL, Excel, and machine learning? Available to interview and join your team right now.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="btn-primary !px-6 !py-3 text-sm font-mono group"
            >
              <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Send Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary !px-5 !py-3 text-sm font-mono cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-5 !py-3 text-sm font-mono group"
            >
              <LinkedinIcon className="w-4 h-4 text-[#ff3b2f]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* DIRECT CONTACT & CHANNELS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {/* Email Direct */}
        <div
          data-build="pop"
          className="bg-[#121215] border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
        >
          <div>
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
              <Mail className="w-4 h-4 text-[#ff3b2f]" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Direct Inquiries
            </div>
            <div className="font-mono text-sm text-white font-medium break-all mb-4">
              {RESUME_DATA.email}
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <span className="text-emerald-400">Copied to clipboard</span>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy email address</span>
              </>
            )}
          </button>
        </div>

        {/* Social Platforms */}
        <div
          data-build="pop"
          className="bg-[#121215] border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
        >
          <div>
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
              <Sparkles className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Profiles &amp; Repositories
            </div>
            <div className="font-anton text-lg text-white uppercase tracking-wide mb-4">
              Code &amp; Professional Network
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-1.5 !px-3 text-xs w-full justify-center"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-1.5 !px-3 text-xs w-full justify-center"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#ff3b2f]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Resume Document */}
        <div
          data-build="pop"
          className="bg-[#121215] border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
        >
          <div>
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
              <FileDown className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Curriculum Vitae
            </div>
            <div className="font-anton text-lg text-white uppercase tracking-wide mb-4">
              Official Resume (PDF)
            </div>
          </div>
          <a
            href={RESUME_DATA.links.resumePdf}
            download="Arkadeb_Das_Resume.pdf"
            className="btn-secondary !py-1.5 !px-3 text-xs w-full justify-center group"
          >
            <FileDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="font-anton text-base text-zinc-300 tracking-wider">
            A<span className="text-[#ff3b2f]">D</span>
          </span>
          <span>© {new Date().getFullYear()} Arkadeb Das. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-zinc-300 transition-colors">
            Work
          </a>
          <a href="#stack" className="hover:text-zinc-300 transition-colors">
            Stack
          </a>
          <a href="#record" className="hover:text-zinc-300 transition-colors">
            Record
          </a>
          <a href="#about" className="hover:text-zinc-300 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#ff3b2f] transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
