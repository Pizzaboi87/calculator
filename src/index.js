import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

serviceWorkerRegistration.register();