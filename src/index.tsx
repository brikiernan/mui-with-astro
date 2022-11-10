import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import App from './App';

import './index.css';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
