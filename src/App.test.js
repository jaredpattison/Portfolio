import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  global.___loader = {enqueue: jest.fn()};
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<App />);
  root.unmount();
});
