import type { LocalizedText } from "./types";

/** A single core module in the "Core Modules" grid (§6.5). */
export interface Module {
  number: string;
  /** Product name, identical in both languages, therefore a plain string. */
  title: string;
  description: LocalizedText;
}

// DE reworked by Chris on 30.07.2026; EN mirrors the DE wording sentence by sentence.
export const modules: Module[] = [
  {
    number: "01",
    title: "Routines · Workflows",
    description: {
      en: "Create multi-step flows with connected nodes. Your agent is just one block among many. Chain tools and modules into repeatable workflows.",
      de: "Erstelle mehrstufige Abläufe aus verbundenen Nodes. Dein Agent ist nur ein Baustein unter vielen. Verkette Tools und Module zu wiederholbaren Workflows.",
    },
  },
  {
    number: "02",
    title: "Impulse · Automation",
    description: {
      en: "Scheduled triggers that run your routines automatically. In the background, no human in the loop. Define once and benefit repeatedly.",
      de: "Zeitgesteuerte Trigger, die deine Routinen automatisch ausführen. Im Hintergrund, ohne Mensch in der Schleife. Einmal definieren, immer wieder profitieren.",
    },
  },
  {
    number: "03",
    title: "Tracker",
    description: {
      en: "The task board for you and your agent. Tasks, status and progress in one place. Managed by you or filled automatically by agents and routines.",
      de: "Das Task-Board für dich und deinen Agenten. Aufgaben, Status und Fortschritt an einem Ort. Von dir gepflegt oder automatisch von Agenten und Routinen befüllt.",
    },
  },
  {
    number: "04",
    title: "Mail & Planner",
    description: {
      en: "Full email client and calendar for Microsoft and Google, on board. Agents may work with the modules if you allow it. You keep the overview.",
      de: "Vollwertiger E-Mail-Client und Kalender für Microsoft und Google, direkt an Bord. Agenten dürfen mit den Modulen arbeiten, wenn du es erlaubst. Du behältst den Überblick.",
    },
  },
  {
    number: "05",
    title: "Scout · AI Evaluator",
    description: {
      en: "Rate and compare products, jobs, companies, hotels and more. By your criteria and your weights. Have your gut feeling checked and backed up.",
      de: "Bewerte und vergleiche Produkte, Jobs, Firmen, Hotels und mehr. Nach deinen Kriterien und Gewichtungen. Lass dein Bauchgefühl gegenprüfen und untermauern.",
    },
  },
  {
    number: "06",
    title: "Multi-Model Chat",
    description: {
      en: "Your chat interface is your bridge. Switch agents, pick the right model for the task and control permissions at any point in the session.",
      de: "Dein Chat-Interface ist deine Brücke. Wechsle Agenten, wähle das passende Modell für die Aufgabe und steuere Berechtigungen jederzeit in der Session.",
    },
  },
];
