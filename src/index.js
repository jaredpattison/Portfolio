import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import App from './App';

const container = document.getElementById('root');
Modal.setAppElement(container);
const root = createRoot(container);
root.render(<App />);
