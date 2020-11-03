import { useMemo } from 'react';
import { detectBrowserLanguage } from './detectBrowserLanguage';
import { Lang, supportedLanguages } from './Locale';

export function useDetectLocalization(preferredLang?: string): Lang {
  let detectedLang = useMemo(
    () =>
      detectBrowserLanguage({
        supportedLanguages,
        preferredLang,
      }) as Lang | undefined,
    [preferredLang],
  );

  return detectedLang ?? supportedLanguages[0];
}
