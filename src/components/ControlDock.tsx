"use client";

import React from "react";
import { Play, Pause, Bot, Compass } from "lucide-react";

interface ControlDockProps {
  isPaused: boolean;
  isAgentsEnabled: boolean;
  isTourActive: boolean;
  onTogglePause: () => void;
  onToggleAgents: (enabled: boolean) => void;
  onTriggerTour: () => void;
}

export default function ControlDock({
  isPaused,
  isAgentsEnabled,
  isTourActive,
  onTogglePause,
  onToggleAgents,
  onTriggerTour,
}: ControlDockProps) {
  return (
    <aside
      aria-label="Agent Controls"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-3 py-2 bg-[#09090b]/90 backdrop-blur-md border border-zinc-800 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-1.5 sm:gap-2 select-none"
    >
      {/* Pause / Resume Button */}
      <button
        onClick={onTogglePause}
        aria-label={isPaused ? "Resume build animation" : "Pause build animation"}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 active:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-[#ff3b2f] focus-visible:outline-offset-2 transition-all cursor-pointer border border-transparent hover:border-zinc-700"
        title="Shortcut: P"
      >
        {isPaused ? (
          <>
            <Play className="w-3.5 h-3.5 text-[#ff3b2f] fill-[#ff3b2f]" />
            <span>Resume</span>
          </>
        ) : (
          <>
            <Pause className="w-3.5 h-3.5 text-zinc-400" />
            <span>Pause</span>
          </>
        )}
        <kbd className="hidden sm:inline-block ml-1 px-1 py-0.2 bg-zinc-900 border border-zinc-700/60 rounded text-[9px] text-zinc-500 font-mono">
          P
        </kbd>
      </button>

      <div className="w-[1px] h-4 bg-zinc-800" />

      {/* Agents Toggle Button */}
      <button
        onClick={() => onToggleAgents(!isAgentsEnabled)}
        aria-label={isAgentsEnabled ? "Disable Autonomous Agents" : "Enable Autonomous Agents"}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer border focus-visible:outline-2 focus-visible:outline-[#ff3b2f] focus-visible:outline-offset-2 ${
          isAgentsEnabled
            ? "text-zinc-200 bg-zinc-800/60 border-zinc-700 hover:bg-zinc-800 hover:text-white"
            : "text-zinc-500 bg-transparent border-transparent hover:text-zinc-300 hover:bg-zinc-900"
        }`}
        title="Shortcut: A"
      >
        <Bot
          className={`w-3.5 h-3.5 ${
            isAgentsEnabled ? "text-[#ff3b2f] robot-led-blink" : "text-zinc-600"
          }`}
        />
        <span>{isAgentsEnabled ? "Agents: ON" : "Agents: OFF"}</span>
        <kbd className="hidden sm:inline-block ml-1 px-1 py-0.2 bg-zinc-900 border border-zinc-700/60 rounded text-[9px] text-zinc-500 font-mono">
          A
        </kbd>
      </button>

      <div className="w-[1px] h-4 bg-zinc-800" />

      {/* Tour Button */}
      <button
        onClick={onTriggerTour}
        disabled={isTourActive}
        aria-label="Start Tour auto-scroll"
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer border focus-visible:outline-2 focus-visible:outline-[#ff3b2f] focus-visible:outline-offset-2 ${
          isTourActive
            ? "bg-[#ff3b2f] text-white border-[#ff3b2f] shadow-[0_0_12px_rgba(255,59,47,0.5)]"
            : "bg-[#18181b] text-zinc-200 border-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 active:bg-zinc-900"
        }`}
        title="Shortcut: T"
      >
        <Compass
          className={`w-3.5 h-3.5 ${isTourActive ? "animate-spin text-white" : "text-[#ff3b2f]"}`}
        />
        <span>{isTourActive ? "Touring..." : "Tour"}</span>
        <kbd className="hidden sm:inline-block ml-1 px-1 py-0.2 bg-zinc-900 border border-zinc-700/60 rounded text-[9px] text-zinc-400 font-mono">
          T
        </kbd>
      </button>
    </aside>
  );
}

