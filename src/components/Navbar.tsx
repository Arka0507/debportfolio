"use client";

import React from "react";
import Link from "next/link";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { RESUME_DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 sm:px-8 py-3.5 backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-900 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Monogram Logo */}
        <Link
          href="#"
          className="flex items-center gap-2 group text-decoration-none focus-visible:outline-2 focus-visible:outline-[#ff3b2f] rounded"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-anton text-base tracking-wider text-white group-hover:border-[#ff3b2f] transition-colors">
            A<span className="text-[#ff3b2f]">D</span>
          </div>
          <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors hidden sm:inline-block">
            arkadeb.das
          </span>
        </Link>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href="#work"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#ff3b2f] rounded px-1 py-0.5"
          >
            01. WORK
          </a>
          <a
            href="#stack"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#ff3b2f] rounded px-1 py-0.5"
          >
            02. STACK
          </a>
          <a
            href="#record"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#ff3b2f] rounded px-1 py-0.5"
          >
            03. RECORD
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#ff3b2f] rounded px-1 py-0.5"
          >
            04. ABOUT
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#ff3b2f] rounded px-1 py-0.5"
          >
            05. CONTACT
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={RESUME_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all focus-visible:outline-2 focus-visible:outline-[#ff3b2f]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all focus-visible:outline-2 focus-visible:outline-[#ff3b2f]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.links.resumePdf}
            download="Arkadeb_Das_Resume.pdf"
            className="btn-secondary !py-1.5 !px-3 text-xs font-mono hidden sm:inline-flex"
          >
            <FileDown className="w-3.5 h-3.5 text-[#ff3b2f]" />
            <span>Resume</span>
          </a>
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="btn-primary !py-1.5 !px-3 text-xs font-mono"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </header>
  );
}
