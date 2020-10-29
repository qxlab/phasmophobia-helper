import { useMemo } from 'react';
import { detectBrowserLanguage } from '../utils';

let supportedLanguages = ['en', 'ru'];
export function useAppLocalization() {
  let lang = useMemo(() => detectBrowserLanguage(supportedLanguages), []);

  return lang;
}
