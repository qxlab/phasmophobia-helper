import { getGhostByMeta, Ghost, GhostMeta } from "../entities/ghost";

export const GHOST_METAS: Array<GhostMeta> = [
    {
        key: 'banshee',
        evidences: [],
    }
]

export function getGhostsByLang(lang: string) {
    return GHOST_METAS.map((meta) => getGhostByMeta(meta, lang))
}