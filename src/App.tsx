import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from '@reach/router';
import { LocalizationProvider } from './Providers';

type Props = PropsWithChildren<RouteComponentProps<{ preferredLang?: string }>>;
export function App({ preferredLang, children }: Props) {
  return (
    <LocalizationProvider preferredLanguage={preferredLang}>
      {children}
    </LocalizationProvider>
  );
}
