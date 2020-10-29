import { Lang } from "../hooks";
import { GHOST_METAS } from "../data/ghosts";
import { getStringByKey } from "../utils/getStringByKey";

export type GhostMeta = {
    key: string;
}

export type Ghost = {
    key: string;
    name: string;
    description: string;
    strongSide: string;
    weakSide: string;
}

export function getGhostByMeta({ key }: GhostMeta, lang: Lang) {
    return {
        key,
        name: getStringByKey(`${key}_name`, lang),
        description: getStringByKey(`${key}_description`, lang),
        strongSide: getStringByKey(`${key}_strongSide`, lang),
        weakSide: getStringByKey(`${key}_weakSide`, lang),
    }
}

export function getGhostsByLang(lang: Lang) {
    return GHOST_METAS.map((meta) => getGhostByMeta(meta, lang))
}