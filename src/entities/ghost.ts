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


export function getEvidenceTranslationDataByKey(
  getStringByPath: (...keys: string[]) => string,
  key: Ghost,
): GhostTranslationData {
  return {
    key,
    name: getStringByPath(key, 'name'),
    description: getStringByPath(key, 'description'),
    strongSide: getStringByPath(key, 'strongSide'),
    weakSide: getStringByPath(key, 'weakSide'),
  };
}
