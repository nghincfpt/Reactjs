import React from 'react';
import ReactDOM from 'react-dom/client';
// BS4 CSS
import "bootstrap/dist/css/bootstrap.css"
// BS4 JS
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
