"use client";

import React, { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import StackSection from "@/components/StackSection";
import RecordSection from "@/components/RecordSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import BuildEngine from "@/components/BuildEngine";
import ControlDock from "@/components/ControlDock";
import BootLoader from "@/components/BootLoader";

export default function Home() {
  const [isBootComplete, setIsBootComplete] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isAgentsEnabled, setIsAgentsEnabled] = useState<boolean>(true);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [forceSkipBoot, setForceSkipBoot] = useState<boolean>(false);

  // Initialize preferences from URL params & localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const agentsParam = params.get("agents");
    const tourParam = params.get("tour");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const storedAgents = localStorage.getItem("portfolio_agents_mode");

    let initialAgents = true;
    if (agentsParam === "on") {
      initialAgents = true;
    } else if (agentsParam === "off") {
      initialAgents = false;
    } else if (storedAgents !== null) {
      initialAgents = storedAgents === "on";
    } else if (prefersReduced) {
      initialAgents = false;
    }

    setIsAgentsEnabled(initialAgents);

    if (tourParam === "true") {
      setIsAgentsEnabled(true);
      setIsTourActive(true);
      setForceSkipBoot(false);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    setIsBootComplete(true);
  }, []);

  const handleToggleAgents = useCallback((enabled: boolean) => {
    setIsAgentsEnabled(enabled);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_agents_mode", enabled ? "on" : "off");
    }
  }, []);

  const handleTogglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  const handleTriggerTour = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("tour", "true");
    url.searchParams.set("agents", "on");
    window.location.href = url.toString();
  }, []);

  const handleStopTour = useCallback(() => {
    setIsTourActive(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("tour")) {
        url.searchParams.delete("tour");
        window.history.replaceState({}, "", url.pathname + (url.search ? url.search : ""));
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#e4e4e7] overflow-x-hidden selection:bg-[#ff3b2f] selection:text-white">
      {/* Boot sequence loader */}
      <BootLoader
        forceSkip={forceSkipBoot}
        onBootComplete={handleBootComplete}
      />

      {/* Autonomous Robot Cursor Construction Swarm Engine */}
      <BuildEngine
        isBootComplete={isBootComplete}
        isPaused={isPaused}
        isAgentsEnabled={isAgentsEnabled}
        isTourActive={isTourActive}
        onToggleAgents={handleToggleAgents}
        onTogglePause={handleTogglePause}
        onStopTour={handleStopTour}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col">
        {/* HERO (Full screen with Anton PORTFOLIO metallic background, headshot, and verified facts) */}
        <Hero />

        {/* 01. WORK (Work that ships: IPL Dashboard, Retail Mart, TrafficVision AI) */}
        <WorkSection />

        {/* 02. STACK (Endless marquee moving left-to-right with all tools from resume) */}
        <StackSection />

        {/* 03. RECORD (Timeline of experience, hackathons, and education) */}
        <RecordSection />

        {/* 04. ABOUT (2 short paragraphs, skills matrix, 4 principles) */}
        <AboutSection />

        {/* 05. CONTACT (Email, socials, big CTA card, footer) */}
        <ContactSection />
      </main>

      {/* Bottom Floating Control Dock */}
      <ControlDock
        isPaused={isPaused}
        isAgentsEnabled={isAgentsEnabled}
        isTourActive={isTourActive}
        onTogglePause={handleTogglePause}
        onToggleAgents={handleToggleAgents}
        onTriggerTour={handleTriggerTour}
      />
    </div>
  );
}
