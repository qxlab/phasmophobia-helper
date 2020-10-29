import React, { useMemo, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAppLocalization } from './hooks';
import { getGhostsByLang } from './mocks/ghosts';

type Props = RouteComponentProps<{ preferredLang?: string }>;
export function App({ preferredLang }: Props) {
  let lang = useAppLocalization(preferredLang);
  console.log(lang);

  let ghosts = useMemo(() => getGhostsByLang('en'), [])

  useEffect(() => {
    console.log('ghosts', ghosts)
  }, [ghosts])

  return (
    <div>
      {lang}
    </div>
  );
}
