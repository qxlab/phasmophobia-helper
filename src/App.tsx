import React from 'react';
import { RouteComponentProps } from '@reach/router';

export function App({ lang }: RouteComponentProps<{ lang?: string }>) {
  return (
    <div>
      {lang}
    </div>
  );
}
