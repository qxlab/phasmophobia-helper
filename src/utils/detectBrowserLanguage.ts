export function detectBrowserLanguage(supportedLanguages: string[]) {
  let defaultLang = supportedLanguages[0];
  if (Array.isArray(navigator.languages)) {
    return navigator.languages.find(it => supportedLanguages.some(x => it.includes(x))) ?? defaultLang;

  } else if (navigator.language) {
    return supportedLanguages.find(it => navigator.language.includes(it)) ?? defaultLang;
  } else {
    return defaultLang;
  }
}
