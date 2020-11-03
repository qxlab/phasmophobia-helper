import { Evidence, Ghost } from '../../entities';
import { DataStoreGraph } from '../../utils';
import { evidences } from './evidences';
import { ghosts } from './ghosts';

let createEvidenceGhostGraph = () =>
  DataStoreGraph<Evidence | Ghost>()
    .add(evidences)
    .add(ghosts)
    .connect('banshee',     ['emf', 'fingerprints', 'freezing'])
    .connect('demon',       ['writing', 'spiritBox', 'freezing'])
    .connect('jinn',        ['emf', 'spiritBox', 'orbs'])
    .connect('mare',        ['spiritBox', 'orbs', 'freezing'])
    .connect('oni',         ['emf', 'writing', 'spiritBox'])
    .connect('phantom',     ['emf', 'orbs', 'freezing'])
    .connect('poltergeist', ['spiritBox', 'fingerprints', 'orbs'])
    .connect('revenant',    ['emf', 'writing', 'fingerprints'])
    .connect('shade',       ['emf', 'writing', 'orbs'])
    .connect('spirit',      ['writing', 'spiritBox', 'fingerprints'])
    .connect('wraith',      ['fingerprints', 'freezing', 'spiritBox'])
    .connect('yurei',       ['orbs', 'writing', 'freezing']);

export let evidenceGhostGraph = createEvidenceGhostGraph();
