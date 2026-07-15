import type { LocalizedText } from "./types";

/** A single figure in the inverted stat bar (§6.4). */
export interface Stat {
  value: string;
  label: LocalizedText;
}

// Spec §10.5; brand terms (BYOK) are never translated.
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
    value: "BYOK",
    label: { en: "BRING YOUR OWN API KEYS", de: "BRING YOUR OWN API KEYS" },
  },
  {
    value: "2",
    label: { en: "PLATFORMS: WEB + DESKTOP", de: "PLATTFORMEN: WEB + DESKTOP" },
  },
];
