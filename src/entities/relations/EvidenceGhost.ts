import { intersection } from 'lodash';
import { Ghost, Evidence } from '..';
import { evidenceGhost } from '../../data';

export type EvidenceGhostRelation = Map<Evidence, Ghost[]>;

export function getGhostsBySelectedEvidences(selectedEvidences: Evidence[]) {
  return intersection(
    ...selectedEvidences.map(e => evidenceGhost.get(e)),
  );
}

export function getRemainEvidenceBySelectedEvidences(
  selectedEvidences: Evidence[]
) {
  // return intersection(
  //   ...selectedEvidences.map(e => evidenceGhost.get(e)),
  // );
}
