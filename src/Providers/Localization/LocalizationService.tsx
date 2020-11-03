import { pathOr, last } from 'ramda';
import { Lang, localeMap } from './Locale';

export interface LocalizationService {
  getStringByPath(...keys: string[]): string;
  getStringByKey(key: string): string;
}

export let createLocalizationService = (lang: Lang): LocalizationService => ({
  getStringByPath: (...keys) =>
    pathOr(last(keys) ?? 'keys not provided', [lang, ...keys], localeMap),
  getStringByKey: (key) => pathOr(key, [lang, key], localeMap),
});
