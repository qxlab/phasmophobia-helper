import { Lang } from '../hooks';
import { EVIDENCES } from '../data';
import { getStringByPath } from '../utils';

export type Evidence =
  | 'emf'
  | 'spiritBox'
  | 'freezing'
  | 'writing'
  | 'orbs'
  | 'fingerprints';

export interface EvidenceTranslationData {
  key: string;
  name: string;
}

export function getEvidenceByKey(key: Evidence, lang: Lang): EvidenceTranslationData {
  return {
    key,
    name: getStringByPath([key, 'name'], lang),
  }
}

export function getEvidencesByLang(lang: Lang) {
  return EVIDENCES.map((evidence) => getEvidenceByKey(evidence, lang))
}
