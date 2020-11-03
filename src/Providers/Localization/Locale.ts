import ru from './locales/ru.json';
import en from './locales/en.json';

export type Lang = 'en' | 'ru';

export type LocaleMap = { ru: typeof ru; en: typeof en };
export let localeMap: LocaleMap = { ru, en };

export let supportedLanguages: [Lang, Lang] = ['ru', 'en'];
