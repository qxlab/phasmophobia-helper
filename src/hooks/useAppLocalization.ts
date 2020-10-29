import { useMemo } from 'react';
import { detectBrowserLanguage } from '../utils';

export type Lang = 'en' | 'ru';
let supportedLanguages: Lang[] = ['en', 'ru'];
export function useAppLocalization(preferredLang?: string): Lang {
  let detectedLang = useMemo(() =>
    detectBrowserLanguage({
      supportedLanguages,
      preferredLang,
    }),
    [preferredLang],
  );

  return (detectedLang ?? supportedLanguages[0]) as Lang;
}
