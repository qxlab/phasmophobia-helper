import React, { useMemo, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getGhostsByLang } from './mocks/ghosts';

export function App({ lang }: RouteComponentProps<{ lang?: string }>) {
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
