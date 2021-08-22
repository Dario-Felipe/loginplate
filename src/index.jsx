import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, FontLoader } from '@gympass/yoga';
import App from './App';
import Auth from './providers/auth';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <FontLoader />
      <Auth>
        <App />
      </Auth>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
