interface Props {
  supportedLanguages: string[];
  preferredLang?: string;
}

let detectFromPreferredLang = (supportedLanguages: string[], preferredLang?: string) => preferredLang ? supportedLanguages.find(it => preferredLang.includes(it)) : undefined;

let detectFromNavigatorLanguages = (supportedLanguages: string[]) => Array.isArray(navigator.languages) ? supportedLanguages.find(x => navigator.languages.some(it => it.includes(x))) : undefined;

let detectFromNavigatorLanguage = (supportedLanguages: string[]) => supportedLanguages.find(it => navigator.language.includes(it));

export function detectBrowserLanguage({ supportedLanguages, preferredLang }: Props) {
  return detectFromPreferredLang(supportedLanguages, preferredLang) ?? detectFromNavigatorLanguages(supportedLanguages) ?? detectFromNavigatorLanguage(supportedLanguages);
}
