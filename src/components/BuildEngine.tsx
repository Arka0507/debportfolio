"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export interface AgentRobot {
  id: number;
  name: string;
  color: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  action: string;
  active: boolean;
  wireframe: {
    x: number;
    y: number;
    w: number;
    h: number;
    opacity: number;
    label: string;
    targetElem: HTMLElement;
  } | null;
  taskElem: HTMLElement | null;
  taskType: "type" | "pop" | "wipe" | null;
  phase: "glide" | "drag" | "build" | "free";
  phaseStartTime: number;
  totalChars: number;
  typedChars: number;
}

const AGENT_PROFILES = [
  { name: "Scout", color: "#00f0ff" },
  { name: "Layout", color: "#eab308" },
  { name: "Typeset", color: "#10b981" },
  { name: "Motion", color: "#f97316" },
  { name: "QA", color: "#a855f7" },
  { name: "Deploy", color: "#ff3b2f" },
  { name: "Copy", color: "#38bdf8" },
  { name: "Lint", color: "#ec4899" },
  { name: "Index", color: "#f59e0b" },
  { name: "Render", color: "#3b82f6" },
  { name: "Palette", color: "#14b8a6" },
  { name: "Review", color: "#84cc16" },
];

interface BuildEngineProps {
  isBootComplete: boolean;
  isPaused: boolean;
  isAgentsEnabled: boolean;
  isTourActive: boolean;
  onToggleAgents: (enabled: boolean) => void;
  onTogglePause: () => void;
  onStopTour: () => void;
}

export default function BuildEngine({
  isBootComplete,
  isPaused,
  isAgentsEnabled,
  isTourActive,
  onToggleAgents,
  onTogglePause,
  onStopTour,
}: BuildEngineProps) {
  const [agents, setAgents] = useState<AgentRobot[]>([]);
  const agentsRef = useRef<AgentRobot[]>([]);
  const isPausedRef = useRef(isPaused);
  const isAgentsEnabledRef = useRef(isAgentsEnabled);
  const isTourActiveRef = useRef(isTourActive);

  isPausedRef.current = isPaused;
  isAgentsEnabledRef.current = isAgentsEnabled;
  isTourActiveRef.current = isTourActive;

  const animationFrameId = useRef<number | null>(null);
  const registeredElements = useRef<Set<HTMLElement>>(new Set());
  const pendingQueue = useRef<HTMLElement[]>([]);
  const activeBuildingSet = useRef<Set<HTMLElement>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize robot agents
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    const poolSize = isMobile ? 6 : 12;
    const initialProfiles = AGENT_PROFILES.slice(0, poolSize);

    const initialAgents: AgentRobot[] = initialProfiles.map((p, idx) => {
      const startX = 60 + (idx * (window.innerWidth - 120)) / poolSize;
      const startY = 80 + (idx % 3) * 60;
      return {
        id: idx,
        name: p.name,
        color: p.color,
        x: startX,
        y: startY,
        targetX: startX,
        targetY: startY,
        action: "Standby",
        active: false,
        wireframe: null,
        taskElem: null,
        taskType: null,
        phase: "free",
        phaseStartTime: 0,
        totalChars: 0,
        typedChars: 0,
      };
    });

    agentsRef.current = initialAgents;
    setAgents(initialAgents);
  }, []);

  // Finish element immediately when agents are disabled or scrolled past
  const instantBuildElement = useCallback((elem: HTMLElement) => {
    elem.removeAttribute("data-building");
    elem.setAttribute("data-built", "true");
    elem.style.visibility = "visible";
    const buildType = elem.getAttribute("data-build");
    if (buildType === "type") {
      const orig = elem.getAttribute("data-original-text");
      if (orig) {
        elem.innerText = orig;
      }
      elem.classList.remove("typing-cursor");
    } else if (buildType === "pop") {
      elem.classList.remove("animate-build-pop");
      elem.style.transform = "none";
      elem.style.opacity = "1";
    } else if (buildType === "wipe") {
      elem.classList.remove("animate-build-wipe");
      elem.style.clipPath = "none";
      elem.style.opacity = "1";
    }

    // Immediately clear wireframe for any robot assigned to this element
    const assignedAgent = agentsRef.current.find((ag) => ag.taskElem === elem);
    if (assignedAgent) {
      assignedAgent.wireframe = null;
      assignedAgent.active = false;
      assignedAgent.taskElem = null;
      assignedAgent.taskType = null;
      assignedAgent.action = "Standby";
      assignedAgent.phase = "free";
    }
  }, []);

  // When agents mode is disabled: reveal everything instantly and clear all wireframes
  useEffect(() => {
    if (!isAgentsEnabled) {
      document.documentElement.classList.remove("build-mode");
      const elements = document.querySelectorAll<HTMLElement>("[data-build]");
      elements.forEach((el) => instantBuildElement(el));
      activeBuildingSet.current.clear();
      pendingQueue.current = [];
      agentsRef.current.forEach((ag) => {
        ag.active = false;
        ag.wireframe = null;
        ag.taskElem = null;
        ag.taskType = null;
        ag.action = "Offline";
        ag.phase = "free";
      });
      setAgents([...agentsRef.current]);
    } else {
      document.documentElement.classList.add("build-mode");
    }
  }, [isAgentsEnabled, instantBuildElement]);

  // Scan and register elements with IntersectionObserver + initial queueing
  useEffect(() => {
    if (typeof window === "undefined" || !isBootComplete) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-build]")
    );

    elements.forEach((elem) => {
      if (registeredElements.current.has(elem)) return;
      registeredElements.current.add(elem);

      // Store initial text if build type is "type" without wiping it,
      // so the element preserves its natural layout width and height!
      const buildType = elem.getAttribute("data-build");
      if (buildType === "type") {
        if (!elem.hasAttribute("data-original-text")) {
          const original = (elem.textContent || elem.innerText || "").trim();
          elem.setAttribute("data-original-text", original);
        }
      }
    });

    // Initial immediate scan to queue visible elements in reading order
    elements.forEach((elem) => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!pendingQueue.current.includes(elem) && elem.getAttribute("data-built") !== "true") {
          pendingQueue.current.push(elem);
        }
      }
    });

    // Sort queue by natural reading order (Y coordinate first, then X coordinate)
    pendingQueue.current.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      const topDiff = (ra.top + window.scrollY) - (rb.top + window.scrollY);
      if (Math.abs(topDiff) > 25) {
        return topDiff;
      }
      return ra.left - rb.left;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elem = entry.target as HTMLElement;
          if (elem.getAttribute("data-built") === "true") return;

          // If element has already scrolled past the top of the viewport, build immediately
          if (entry.boundingClientRect.bottom < 0) {
            instantBuildElement(elem);
            pendingQueue.current = pendingQueue.current.filter((e) => e !== elem);
            return;
          }

          if (entry.isIntersecting) {
            if (
              !pendingQueue.current.includes(elem) &&
              !activeBuildingSet.current.has(elem)
            ) {
              pendingQueue.current.push(elem);
              pendingQueue.current.sort((a, b) => {
                const ra = a.getBoundingClientRect();
                const rb = b.getBoundingClientRect();
                const topDiff = (ra.top + window.scrollY) - (rb.top + window.scrollY);
                if (Math.abs(topDiff) > 25) {
                  return topDiff;
                }
                return ra.left - rb.left;
              });
            }
          }
        });
      },
      {
        rootMargin: "50px 0px 50px 0px",
        threshold: 0.05,
      }
    );

    elements.forEach((el) => {
      if (el.getAttribute("data-built") !== "true") {
        observer.observe(el);
      }
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [isBootComplete, instantBuildElement]);

  // Main single requestAnimationFrame loop
  useEffect(() => {
    if (!isBootComplete) return;

    let lastTick = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTick) / 1000, 0.1);
      lastTick = now;

      if (!isPausedRef.current && isAgentsEnabledRef.current) {
        const pool = agentsRef.current;
        const maxSimultaneous = 6;
        const currentActiveCount = pool.filter((ag) => ag.active).length;

        // Dispatch new tasks if capacity allows
        if (currentActiveCount < maxSimultaneous && pendingQueue.current.length > 0) {
          const idleAgent = pool.find((ag) => !ag.active);
          if (idleAgent) {
            const candidateElem = pendingQueue.current.shift();
            if (candidateElem && !activeBuildingSet.current.has(candidateElem)) {
              if (candidateElem.getAttribute("data-built") === "true") {
                // already completed
              } else {
                activeBuildingSet.current.add(candidateElem);
                const rect = candidateElem.getBoundingClientRect();
                const boxW = Math.max(32, Math.round(rect.width));
                const boxH = Math.max(22, Math.round(rect.height));

                idleAgent.active = true;
                idleAgent.taskElem = candidateElem;
                idleAgent.taskType = (candidateElem.getAttribute("data-build") as any) || "pop";
                idleAgent.targetX = rect.left;
                idleAgent.targetY = rect.top;
                idleAgent.phase = "glide";
                idleAgent.phaseStartTime = now;
                idleAgent.action = "Gliding";

                const orig = candidateElem.getAttribute("data-original-text") || "";
                idleAgent.totalChars = orig.length;
                idleAgent.typedChars = 0;

                idleAgent.wireframe = {
                  x: rect.left,
                  y: rect.top,
                  w: 4,
                  h: 4,
                  opacity: 1,
                  label: `[${idleAgent.taskType?.toUpperCase()}] ${boxW}×${boxH}`,
                  targetElem: candidateElem,
                };
              }
            }
          }
        }

        // Update all agents state
        pool.forEach((ag) => {
          if (!ag.active || !ag.taskElem) {
            // Idle hover drift gently
            ag.x += Math.sin(now * 0.002 + ag.id) * 0.25;
            ag.y += Math.cos(now * 0.002 + ag.id) * 0.25;
            // Ensure idle agents never have a lingering wireframe box
            ag.wireframe = null;
            return;
          }

          const elem = ag.taskElem;
          const rect = elem.getBoundingClientRect();
          const targetW = Math.max(32, rect.width);
          const targetH = Math.max(22, rect.height);
          const elapsed = now - ag.phaseStartTime;

          // 1. GLIDE PHASE
          if (ag.phase === "glide") {
            ag.targetX = rect.left;
            ag.targetY = rect.top;
            ag.action = "Targeting";

            const dx = ag.targetX - ag.x;
            const dy = ag.targetY - ag.y;
            const dist = Math.hypot(dx, dy);

            // Smooth spring-like easing towards element
            ag.x += dx * Math.min(dt * 9.5, 0.4);
            ag.y += dy * Math.min(dt * 9.5, 0.4);

            if (dist < 14 || elapsed > 650) {
              ag.phase = "drag";
              ag.phaseStartTime = now;
              ag.action = "Drawing Frame";
              if (ag.wireframe) {
                ag.wireframe.opacity = 1;
              }
            }
          }

          // 2. DRAG WIREFRAME PHASE
          else if (ag.phase === "drag") {
            const dragProgress = Math.min(elapsed / 280, 1);
            const easeProgress = 1 - Math.pow(1 - dragProgress, 3);

            ag.x = rect.left + targetW * easeProgress;
            ag.y = rect.top + targetH * easeProgress;

            if (ag.wireframe) {
              ag.wireframe.x = rect.left;
              ag.wireframe.y = rect.top;
              ag.wireframe.w = Math.max(12, targetW * easeProgress);
              ag.wireframe.h = Math.max(12, targetH * easeProgress);
            }

            if (dragProgress >= 1) {
              ag.phase = "build";
              ag.phaseStartTime = now;
              elem.setAttribute("data-building", "true");
              elem.style.visibility = "visible";

              if (ag.taskType === "type") {
                ag.action = "Typesetting";
                elem.innerText = "";
                elem.classList.add("typing-cursor");
              } else if (ag.taskType === "pop") {
                ag.action = "Mounting";
                elem.classList.add("animate-build-pop");
              } else if (ag.taskType === "wipe") {
                ag.action = "Wiping";
                elem.classList.add("animate-build-wipe");
              }
            }
          }

          // 3. BUILD CONTENT PHASE
          else if (ag.phase === "build") {
            if (ag.wireframe) {
              ag.wireframe.x = rect.left;
              ag.wireframe.y = rect.top;
              ag.wireframe.w = targetW;
              ag.wireframe.h = targetH;
            }

            if (ag.taskType === "type") {
              const orig = elem.getAttribute("data-original-text") || "";
              const buildElapsed = now - ag.phaseStartTime;
              const charsToType = Math.min(
                Math.floor(buildElapsed / 16),
                orig.length
              );
              elem.innerText = orig.slice(0, charsToType);

              if (charsToType >= orig.length || buildElapsed > 800) {
                elem.innerText = orig;
                elem.classList.remove("typing-cursor");
                ag.phase = "free";
                ag.phaseStartTime = now;
              }
            } else {
              // Pop or wipe completes in ~300ms
              if (elapsed > 300) {
                ag.phase = "free";
                ag.phaseStartTime = now;
              }
            }
          }

          // 4. FREE / RELEASE PHASE — IMMEDIATELY CLEAR WIREFRAME!
          else if (ag.phase === "free") {
            elem.removeAttribute("data-building");
            elem.setAttribute("data-built", "true");
            elem.style.visibility = "visible";
            activeBuildingSet.current.delete(elem);

            // Clear the wireframe completely so no box stays on screen
            ag.wireframe = null;
            ag.action = "Standby";
            ag.active = false;
            ag.taskElem = null;
            ag.taskType = null;
          }
        });

        // Trigger react state update
        setAgents([...pool]);
      }

      animationFrameId.current = requestAnimationFrame(loop);
    };

    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isBootComplete]);

  // Tour Auto-Scroll System
  useEffect(() => {
    if (!isTourActive) return;

    let tourStartTime = performance.now();
    let scrollRafId: number | null = null;
    const initialWait = 1600;
    const totalDuration = 24000;

    const runTourScroll = (timestamp: number) => {
      const elapsed = timestamp - tourStartTime;

      if (elapsed < initialWait) {
        scrollRafId = requestAnimationFrame(runTourScroll);
        return;
      }

      const scrollElapsed = elapsed - initialWait;
      const progress = Math.min(scrollElapsed / totalDuration, 1);

      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * easeInOutCubic);

      if (progress < 1 && isTourActiveRef.current) {
        scrollRafId = requestAnimationFrame(runTourScroll);
      } else {
        onStopTour();
      }
    };

    scrollRafId = requestAnimationFrame(runTourScroll);

    const handleUserScroll = (e: Event) => {
      if (e.isTrusted) {
        onStopTour();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onStopTour();
      }
    };

    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTourActive, onStopTour]);

  // Global Keyboard shortcuts: T = tour, A = agents, P = pause
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === "p") {
        e.preventDefault();
        onTogglePause();
      } else if (key === "a") {
        e.preventDefault();
        onToggleAgents(!isAgentsEnabledRef.current);
      } else if (key === "t") {
        e.preventDefault();
        const url = new URL(window.location.href);
        url.searchParams.set("tour", "true");
        window.location.href = url.toString();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onTogglePause, onToggleAgents]);

  if (!isBootComplete) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Tour Mode Top HUD Indicator */}
      {isTourActive && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#09090b]/95 border border-[#ff3b2f] text-white px-4 py-2 rounded-full shadow-[0_0_20px_rgba(255,59,47,0.4)] flex items-center gap-3 text-xs font-mono pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b2f] animate-ping" />
          <span className="font-semibold text-zinc-100">
            CINEMATIC TOUR ACTIVE (AUTO-SCROLLING)
          </span>
          <span className="text-zinc-400 text-[11px] border-l border-zinc-700 pl-3">
            Press <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700 text-white font-mono">ESC</kbd> or scroll to stop
          </span>
          <button
            onClick={onStopTour}
            className="ml-2 text-[10px] px-2 py-0.5 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-200 border border-zinc-600 cursor-pointer"
          >
            Exit Tour
          </button>
        </div>
      )}

      {/* Render Wireframes ONLY while active and building */}
      {isAgentsEnabled &&
        agents.map((ag) => {
          if (!ag.wireframe || !ag.active || ag.phase === "free") return null;
          const { x, y, w, h, label } = ag.wireframe;
          return (
            <div
              key={`wf-${ag.id}`}
              className="absolute pointer-events-none"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${w}px`,
                height: `${h}px`,
              }}
            >
              {/* Wireframe border and blueprint fill */}
              <div
                className="w-full h-full border border-sky-400/80 bg-sky-500/[0.04] relative"
                style={{
                  boxShadow: "0 0 12px rgba(56, 189, 248, 0.25)",
                }}
              >
                {/* 4 Corner Handles */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-sky-400 border border-white/60 shadow-sm" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 border border-white/60 shadow-sm" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-sky-400 border border-white/60 shadow-sm" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-sky-400 border border-white/60 shadow-sm" />

                {/* HUD Label */}
                <div className="absolute -top-5 left-0 px-1.5 py-0.5 bg-black/90 border border-sky-400/60 rounded text-[9px] font-mono text-sky-300 whitespace-nowrap shadow-md">
                  {label}
                </div>
              </div>
            </div>
          );
        })}

      {/* Render Robot Cursors */}
      {isAgentsEnabled &&
        agents.map((ag) => (
          <div
            key={`cursor-${ag.id}`}
            className="absolute top-0 left-0 pointer-events-none transform -translate-x-1 -translate-y-1 transition-transform ease-out"
            style={{
              transform: `translate3d(${ag.x}px, ${ag.y}px, 0)`,
              zIndex: ag.active ? 45 : 42,
              opacity: isPaused ? 0.6 : 1,
            }}
          >
            {/* Mouse Arrow Pointer */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={ag.color}
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              <path
                d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z"
                stroke="#000000"
                strokeWidth="1.5"
              />
            </svg>

            {/* Name Tag Pill with Tiny Robot Head */}
            <div
              className="absolute left-3.5 top-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium shadow-xl border select-none whitespace-nowrap backdrop-blur-md"
              style={{
                backgroundColor: "rgba(9, 9, 11, 0.94)",
                borderColor: ag.color,
                color: "#ffffff",
                boxShadow: `0 0 12px ${ag.color}40`,
              }}
            >
              {/* Tiny Robot Head */}
              <div className="relative flex items-center justify-center w-3 h-3">
                {/* Pulsing antenna */}
                <div
                  className="absolute -top-1 w-1 h-1 rounded-full robot-antenna-pulse"
                  style={{ backgroundColor: ag.color }}
                />
                <div
                  className="w-2.5 h-2 rounded-[2px] border flex items-center justify-center gap-0.5 bg-black/80"
                  style={{ borderColor: ag.color }}
                >
                  {/* Blinking LED eyes */}
                  <div
                    className="w-0.5 h-0.5 rounded-full robot-led-blink"
                    style={{ backgroundColor: ag.color }}
                  />
                  <div
                    className="w-0.5 h-0.5 rounded-full robot-led-blink"
                    style={{ backgroundColor: ag.color }}
                  />
                </div>
              </div>

              <span>{ag.name}</span>

              {ag.action && (
                <span className="text-[9px] opacity-75 border-l border-zinc-700 pl-1 text-zinc-300">
                  {ag.action}
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
