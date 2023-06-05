import React from 'react';
import ReactDOM from 'react-dom/client';
import ControlledComponentApp from "./components/ControlledComponentApp";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ControlledComponentApp />
  </React.StrictMode>
);
