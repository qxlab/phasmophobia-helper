import { Lang } from '../hooks';
import { EVIDENCES } from '../data';
import { getStringByKey } from '../utils';

export type Evidence = 'emf' | 'spiritBox' | 'freezing' | 'writing' | 'orbs' | 'fingerprints';

export interface EvidenceTranslationData {
  key: string;
  name: string;
}

export function getEvidenceByMeta(key: Evidence, lang: Lang): EvidenceTranslationData {
  return {
    key,
    name: getStringByKey(`${key}_name`, lang),
  }
}

export function getEvidencesByLang(lang: Lang) {
  return EVIDENCES.map((evidence) => getEvidenceByMeta(evidence, lang))
}
