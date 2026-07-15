import type { LocalizedText } from "./types";

/** A single core module in the "Core Modules" grid (§6.5). */
export interface Module {
  number: string;
  /** Product name — identical in both languages, therefore a plain string. */
  title: string;
  description: LocalizedText;
}

// EN verbatim from the prototype script; DE draft from spec §10.2.
export const modules: Module[] = [
  {
    number: "01",
    title: "Routines — Workflows",
    description: {
      en: "Create multi-step flows with connected nodes. Your agent is just one block among many. Chain tools and modules into repeatable workflows.",
      de: "Erstelle mehrstufige Abläufe aus verbundenen Nodes. Dein Agent ist nur ein Baustein unter vielen. Verkette Tools und Module zu wiederholbaren Workflows.",
    },
  },
  {
    number: "02",
    title: "Impulse — Automation",
    description: {
      en: "Scheduled triggers that run your routines automatically. Time-based, in the background, no human in the loop. Define once and benefit repeatedly.",
      de: "Zeitgesteuerte Trigger, die deine Routinen automatisch ausführen. Im Hintergrund, ohne Mensch in der Schleife. Einmal definieren, immer wieder profitieren.",
    },
  },
  {
    number: "03",
    title: "Tracker",
    description: {
      en: "Your task board. Tasks, status, and progress in one place — managed by you or filled automatically by agents and routines.",
      de: "Dein Task-Board. Aufgaben, Status und Fortschritt an einem Ort — von dir gepflegt oder automatisch von Agenten und Routinen befüllt.",
    },
  },
  {
    number: "04",
    title: "Mail & Planner",
    description: {
      en: "Full email client and calendar for Microsoft and Google, on board. Agents can work with the modules if permission is granted. You keep the overview.",
      de: "Vollwertiger E-Mail-Client und Kalender für Microsoft und Google, direkt an Bord. Agenten dürfen mit den Modulen arbeiten, wenn du es erlaubst. Du behältst den Überblick.",
    },
  },
  {
    number: "05",
    title: "Scout — AI Evaluator",
    description: {
      en: "Rate and compare products, jobs, companies, hotels, and more against your criteria and weights. Back up your gut feeling or validate your own research.",
      de: "Bewerte und vergleiche Produkte, Jobs, Firmen, Hotels und mehr — nach deinen Kriterien und Gewichtungen. Untermauere dein Bauchgefühl oder prüfe deine eigene Recherche.",
    },
  },
  {
    number: "06",
    title: "Multi-Model Chat",
    description: {
      en: "Your chat interface is your bridge. Switch agents, pick the right model for specific tasks, and control permission modes at any point in the session.",
      de: "Dein Chat-Interface ist deine Brücke. Wechsle Agenten, wähle das passende Modell für die Aufgabe und steuere Berechtigungen jederzeit in der Session.",
    },
  },
];
