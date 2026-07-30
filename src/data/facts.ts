import type { LocalizedText } from "./types";

/** A single clarification row in the "Why I build this" section. */
export interface ProjectFact {
  label: LocalizedText;
  value: LocalizedText;
}

// Answers the questions the site used to raise: scope, purpose, release, focus.
export const facts: ProjectFact[] = [
  {
    label: { en: "STATUS", de: "STATUS" },
    value: {
      en: "Ongoing, at my own pace, no deadline and no release date.",
      de: "Läuft weiter, in meinem Tempo, ohne Termin und ohne Release-Datum.",
    },
  },
  {
    label: { en: "PURPOSE", de: "ZWECK" },
    value: {
      en: "A learning environment and a tool for myself. Not a product.",
      de: "Lernumgebung und Werkzeug für mich selbst. Kein Produkt.",
    },
  },
  {
    label: { en: "IF RELEASED", de: "FALLS RELEASE" },
    value: {
      en: "Then as open source. I do not run a service and I am not going freelance.",
      de: "Dann als Open Source. Ich betreibe keinen Dienst und plane keine Selbständigkeit.",
    },
  },
  {
    label: { en: "MY FOCUS", de: "MEIN FOKUS" },
    value: {
      en: "A permanent position as an AI enabler. This project feeds that, it does not compete with it.",
      de: "Eine Festanstellung als AI Enabler. Dieses Projekt zahlt darauf ein, es konkurriert nicht damit.",
    },
  },
];
