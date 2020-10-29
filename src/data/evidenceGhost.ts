import { EvidenceGhostRelation } from '../entities';

function createEvidenceGhostRelationMap() {
  let data: EvidenceGhostRelation = new Map();
  data.set('emf', ['banshee', 'oni', 'jinn', 'phantom', 'revenant', 'shade']);
  data.set('fingerprints', ['banshee', 'poltergeist', 'revenant', 'spirit', 'wraith']);
  data.set('writing', ['demon', 'oni', 'revenant', 'shade', 'spirit', 'yurei']);
  data.set('freezing', ['banshee', 'demon', 'mare', 'phantom', 'wraith', 'yurei']);
  data.set('orbs', ['jinn', 'mare', 'phantom', 'poltergeist', 'shade', 'yurei']);
  data.set('spiritBox', ['demon', 'jinn', 'mare', 'oni', 'poltergeist', 'spirit', 'wraith']);
  return data;
}

export let evidenceGhost: EvidenceGhostRelation = createEvidenceGhostRelationMap();
