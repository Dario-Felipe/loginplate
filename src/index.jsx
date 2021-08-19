import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, FontLoader } from '@gympass/yoga';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <FontLoader />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
