import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './App.tsx';
import { theme } from './theme.ts';
import './i18n.ts';

import './index.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
