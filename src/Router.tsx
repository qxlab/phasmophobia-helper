import React from 'react';
import { Router as RRouter } from '@reach/router';
import { App } from './App';

export function Router() {
  return (
    <RRouter>
      <App path="/:lang" />
    </RRouter>
  );
}
