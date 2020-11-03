import { Lang } from '../hooks';
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

export function getEvidenceTranslationDataByKey(
  key: Evidence,
  lang: Lang,
): EvidenceTranslationData {
  return {
    key,
    name: getStringByPath([key, 'name'], lang),
  };
}

export function getEvidencesByLang(evidences: Evidence[], lang: Lang) {
  return evidences.map((evidence) =>
    getEvidenceTranslationDataByKey(evidence, lang),
  );
}
