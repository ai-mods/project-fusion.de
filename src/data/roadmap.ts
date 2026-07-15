import type { LocalizedText } from "./types";

/** A single milestone row in the "Roadmap" section (§6.8). */
export interface RoadmapMilestone {
  quarter: string;
  title: LocalizedText;
  description: LocalizedText;
}

// Milestones finalized on 2026-07-15 (formerly open item O7).
export const roadmap: RoadmapMilestone[] = [
  {
    quarter: "H2 2026",
    title: { en: "Alpha", de: "Alpha" },
    description: {
      en: "Closed alpha — first invites, web + desktop, core modules.",
      de: "Geschlossene Alpha — erste Einladungen, Web + Desktop, Kern-Module.",
    },
  },
  {
    quarter: "H1 2027",
    title: { en: "Beta", de: "Beta" },
    description: {
      en: "Open sign-up, more providers, module marketplace groundwork.",
      de: "Offene Registrierung, mehr Provider, Grundlagen für den Modul-Marktplatz.",
    },
  },
  {
    quarter: "TBA 2027",
    title: { en: "Full Release", de: "Full Release" },
    description: {
      en: "Version 1.0 — stable, polished, ready for daily work.",
      de: "Version 1.0 — stabil, poliert, bereit für den Alltag.",
    },
  },
  {
    quarter: "TBA",
    title: { en: "Mobile Companion", de: "Mobile Companion" },
    description: {
      en: "Companion app for iOS and Android — your agents on the go.",
      de: "Companion-App für iOS und Android — deine Agenten unterwegs.",
    },
  },
];
