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
  getStringByPath: (...keys: string[]) => string,
  key: Evidence,
): EvidenceTranslationData {
  return {
    key,
    name: getStringByPath(key, 'name'),
  };
}

