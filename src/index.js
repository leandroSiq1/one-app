import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, deepPurple } from '@material-ui/core/colors';

import { AuthProvider } from './state/auth';

import App from './App';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500]
    },
    secondary: {
      main: deepPurple[500]
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);