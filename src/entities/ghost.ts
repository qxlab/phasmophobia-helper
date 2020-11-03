import { Lang } from '../hooks';
import { getStringByPath } from '../utils';

export type Ghost =
  | 'banshee'
  | 'demon'
  | 'jinn'
  | 'mare'
  | 'oni'
  | 'phantom'
  | 'poltergeist'
  | 'revenant'
  | 'shade'
  | 'spirit'
  | 'wraith'
  | 'yurei';

export interface GhostTranslationData {
  key: Ghost;
  name: string;
  description: string;
  strongSide: string;
  weakSide: string;
}

export function getGhostByKey(key: Ghost, lang: Lang): GhostTranslationData {
  return {
    key,
    name: getStringByPath([key, 'name'], lang),
    description: getStringByPath([key, 'description'], lang),
    strongSide: getStringByPath([key, 'strongSide'], lang),
    weakSide: getStringByPath([key, 'weakSide'], lang),
  };
}

export function getGhostsByLang(ghosts: Ghost[], lang: Lang) {
  return ghosts.map((key) => getGhostByKey(key, lang));
}
