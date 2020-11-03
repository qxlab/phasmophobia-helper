import React, {
  PropsWithChildren,
  createContext,
  useMemo,
  useContext,
} from 'react';
import { supportedLanguages } from './Locale';
import { createLocalizationService } from './LocalizationService';
import { useDetectLocalization } from './useDetectLocalization';

let initialState = createLocalizationService(supportedLanguages[0]);
let LocalizationContext = createContext(initialState);

type Props = PropsWithChildren<{
  preferredLanguage?: string;
}>;
export function LocalizationProvider({ preferredLanguage, children }: Props) {
  let lang = useDetectLocalization(preferredLanguage);
  let service = useMemo(() => createLocalizationService(lang), [lang]);
  return (
    <LocalizationContext.Provider value={service}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalizationService() {
  let service = useContext(LocalizationContext);

  return service;
}
