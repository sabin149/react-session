import React from 'react';
import { render } from '@testing-library/react';

import Router from '../src/router/Router';
export function renderRoute(route = '/') {
  window.history.pushState({}, 'Test page', route);

  return render(<Router />);
}
