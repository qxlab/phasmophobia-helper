import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAppLocalization } from './hooks';
import { evidenceGhostGraph } from './repositories';

type Props = RouteComponentProps<{ preferredLang?: string }>;
export function App({ preferredLang }: Props) {
  let lang = useAppLocalization(preferredLang);

  useEffect(() => {
    console.log('evidenceGhostGraph', evidenceGhostGraph);
  }, []);

  return <div>{lang}</div>;
}
