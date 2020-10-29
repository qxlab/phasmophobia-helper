import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAppLocalization } from './hooks';

type Props = RouteComponentProps<{ preferredLang?: string }>;
export function App({ preferredLang }: Props) {
  let lang = useAppLocalization(preferredLang);
  console.log(lang);
  return (
    <div>
      {lang}
    </div>
  );
}
