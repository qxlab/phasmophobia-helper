import { intersection, uniq } from 'lodash';
import { Evidence, Ghost } from '../entities';
import { Graph } from '../utils';

export type EvidenceGhostGraph = Graph<Ghost | Evidence>;

export let getGhostsByEvidences = (
  graph: EvidenceGhostGraph,
  evidences: Evidence[],
) => intersection(...evidences.map((e) => graph.getConnections(e).toArray()));

export let getEvidenceByGhosts = (graph: EvidenceGhostGraph, ghosts: Ghost[]) =>
  uniq(ghosts.flatMap((it) => graph.getConnections(it).toArray()));
