import { pathOr } from 'ramda';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

export const LANGUAGES_MAP = {
    ru,
    en,
}

export function getStringByKey(key: string, lang: string) {
    return pathOr(key, [lang, key], LANGUAGES_MAP)
}

export function getStringByPath(keys: string[], lang: string) {
  return pathOr('', [lang, ...keys], LANGUAGES_MAP)
}
