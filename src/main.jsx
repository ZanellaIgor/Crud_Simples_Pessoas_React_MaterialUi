import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SnackBarProvider } from './components/SnackBar/Snackbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackBarProvider>
    <App />
  </SnackBarProvider>
);
