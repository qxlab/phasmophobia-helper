import React, { useMemo, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAppLocalization } from './hooks';
import { getGhostsByLang } from './entities/ghost';
import { getEvidencesByLang } from './entities';

type Props = RouteComponentProps<{ preferredLang?: string }>;
export function App({ preferredLang }: Props) {
  let lang = useAppLocalization(preferredLang);
  let ghosts = useMemo(() => getGhostsByLang(lang), [lang])
  let evidences = useMemo(() => getEvidencesByLang(lang), [lang])

  useEffect(() => {
    console.log('ghosts', ghosts)
    console.log('evidences', evidences)
  }, [ghosts, evidences])

  return (
    <div>
      {lang}
    </div>
  );
}
