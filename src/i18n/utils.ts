import de from "./de.json";
import en from "./en.json";

/**
 * Translation dictionaries keyed by locale.
 * `satisfies` pins every locale to the English key set, so a missing or misspelled
 * key in `de.json` fails the type check instead of silently returning `undefined`.
 */
export const ui = { de, en } satisfies Record<string, typeof en>;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof en;

/**
 * Returns the counterpart locale (`en` ↔ `de`).
 */
export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "de" : "en";
}

/**
 * Returns the home route of the given locale — also the prefix for anchor links.
 */
export function homePath(lang: Lang): string {
  return lang === "en" ? "/" : "/de/";
}

/**
 * Returns a lookup function bound to the given locale.
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key];
  };
}
