import React from 'react';
import ReactDOM from 'react-dom/client';

//* Views
import { Home } from './views';

//* Styled components
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
