import React, { useMemo, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAppLocalization } from './hooks';
import { getGhostsByLang } from './entities/ghost';

type Props = RouteComponentProps<{ preferredLang?: string }>;
export function App({ preferredLang }: Props) {
  let lang = useAppLocalization(preferredLang);
  let ghosts = useMemo(() => getGhostsByLang(lang), [lang])

  useEffect(() => {
    console.log('ghosts', ghosts)
  }, [ghosts])

  return (
    <div>
      {lang}
    </div>
  );
}
