import type { LocalizedText } from "./types";

/** A single building block row in the "Agent Harness" section (§6.7). */
export interface HarnessLayer {
  number: string;
  /** Layer name — identical in both languages, therefore a plain string. */
  title: string;
  description: LocalizedText;
}

// EN verbatim from the prototype script, without the "(placeholder)" suffixes (D3: real names); DE from spec §10.3.
export const harness: HarnessLayer[] = [
  {
    number: "01",
    title: "Isolated Sandbox",
    description: {
      en: "Every agent runs in its own contained environment — nothing leaks out.",
      de: "Jeder Agent läuft in seiner eigenen, abgeschotteten Umgebung — nichts dringt nach außen.",
    },
  },
  {
    number: "02",
    title: "Permission Gates",
    description: {
      en: "You grant and revoke capabilities per module. Nothing happens without consent.",
      de: "Du erteilst und entziehst Berechtigungen pro Modul. Nichts passiert ohne deine Zustimmung.",
    },
  },
  {
    number: "03",
    title: "File Access",
    description: {
      en: "Scoped read/write access to exactly the files an agent needs.",
      de: "Begrenzter Lese- und Schreibzugriff auf genau die Dateien, die ein Agent braucht.",
    },
  },
  {
    number: "04",
    title: "Terminal",
    description: {
      en: "Direct shell access for real work on files and commands.",
      de: "Direkter Shell-Zugriff für echte Arbeit an Dateien und Kommandos.",
    },
  },
  {
    number: "05",
    title: "Networking",
    description: {
      en: "Controlled outbound access — APIs, web, services.",
      de: "Kontrollierter Zugriff nach außen — APIs, Web, Services.",
    },
  },
  {
    number: "06",
    title: "Event System",
    description: {
      en: "Every run, every tool, every decision emits an event. Monitoring is the natural consequence.",
      de: "Jeder Lauf, jedes Tool, jede Entscheidung erzeugt ein Event. Monitoring ist die natürliche Folge.",
    },
  },
];
