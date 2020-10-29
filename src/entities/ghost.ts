import { Lang } from '../hooks';
import { GHOSTS } from '../data';
import { getStringByKey } from '../utils';

export interface Ghost {
  key: string;
}

export interface GhostTranslationData {
  key: string;
  name: string;
  description: string;
  strongSide: string;
  weakSide: string;
}

export function getGhostByMeta({ key }: Ghost, lang: Lang): GhostTranslationData {
  return {
    key,
    name: getStringByKey(`${key}_name`, lang),
    description: getStringByKey(`${key}_description`, lang),
    strongSide: getStringByKey(`${key}_strongSide`, lang),
    weakSide: getStringByKey(`${key}_weakSide`, lang),
  }
}

export function getGhostsByLang(lang: Lang) {
  return GHOSTS.map((ghost) => getGhostByMeta(ghost, lang))
}
