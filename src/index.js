import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, deepPurple } from '@material-ui/core/colors';

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
  status: {
    info: "#111",
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);