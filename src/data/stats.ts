import type { LocalizedText } from "./types";

/** A single figure in the inverted stat bar (§6.4). */
export interface Stat {
  value: string;
  label: LocalizedText;
}

// Spec §10.5. Figures describe the build, not a product offering.
export const stats: Stat[] = [
  {
    value: "9",
    label: { en: "AI PROVIDERS", de: "KI-PROVIDER" },
  },
  {
    value: "6+",
    label: { en: "INTEGRATED MODULES", de: "INTEGRIERTE MODULE" },
  },
  {
    value: "2",
    label: { en: "PLATFORMS: WEB + DESKTOP", de: "PLATTFORMEN: WEB + DESKTOP" },
  },
  {
    value: "1",
    label: { en: "DEVELOPER · SOLO PROJECT", de: "ENTWICKLER · SOLO-PROJEKT" },
  },
];
