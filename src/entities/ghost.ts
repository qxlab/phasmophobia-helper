import { getStringByKey } from "../utils/getStringByKey";
import { Evidence, EvidenceMeta } from "./evidence";

export type GhostMeta = {
    key: string;
    evidences: Array<EvidenceMeta>;
}

export type Ghost = {
    key: string;
    name: string;
    description: string;
    strongSide: string;
    weakSide: string;
    evidences: Array<Evidence>;
}

export function getGhostByMeta({ key }: GhostMeta, lang: string) {
    return {
        key,
        name: getStringByKey(`${key}_name`, lang),
        description: getStringByKey(`${key}_description`, lang),
        strongSide: getStringByKey(`${key}_strongSide`, lang),
        weakSide: getStringByKey(`${key}_weakSide`, lang),
    }
}