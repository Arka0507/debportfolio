"use client";

import React, { useEffect, useState, useRef } from "react";
import { Bot } from "lucide-react";

interface BootLoaderProps {
  onBootComplete: () => void;
  forceSkip?: boolean;
}

export default function BootLoader({ onBootComplete, forceSkip }: BootLoaderProps) {
  const [visible, setVisible] = useState(!forceSkip);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const onCompleteRef = useRef(onBootComplete);
  onCompleteRef.current = onBootComplete;

  useEffect(() => {
    if (forceSkip) {
      setVisible(false);
      onCompleteRef.current();
      return;
    }

    const messages = [
      "INITIALIZING ROBOT ARCHITECT SWARM [12 NODES]...",
      "CALIBRATING BLUEPRINT WIREFRAME ENGINE...",
      "ESTABLISHING READING-ORDER INTERSECTION OBSERVERS...",
      "SYSTEM READY -> COMPILING INTERFACE"
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onCompleteRef.current();
          }, 200);
          return 100;
        }
        return next;
      });

      if (currentLogIndex < messages.length) {
        setLogs((prev) => [...prev, messages[currentLogIndex]]);
        currentLogIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [forceSkip]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090b] flex flex-col items-center justify-center p-4 transition-opacity duration-300"
      style={{ opacity: progress === 100 ? 0 : 1 }}
    >
      <div className="w-full max-w-md bg-[#121215] border border-zinc-800 rounded-lg p-5 shadow-2xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Bot className="w-4 h-4 text-[#ff3b2f] robot-led-blink" />
            <span className="text-zinc-200 font-semibold tracking-wider">SWARM_BOOT.SYS</span>
          </div>
          <span className="text-[11px] font-mono text-[#ff3b2f]">{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#ff3b2f] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Logs */}
        <div className="font-mono text-[11px] space-y-1.5 min-h-[72px] text-zinc-400">
          {logs.map((log, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-[#ff3b2f] text-[10px]">▶</span>
              <span className={idx === logs.length - 1 ? "text-zinc-200" : "text-zinc-500"}>
                {log}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>6-12 AUTONOMOUS AGENTS</span>
          <button
            onClick={() => {
              setVisible(false);
              onCompleteRef.current();
            }}
            className="text-zinc-400 hover:text-zinc-200 underline cursor-pointer"
          >
            Skip boot [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
