import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
  JSX -> Es una sintaxis entre HTML y JS que me permite renderizar tags con variables
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
