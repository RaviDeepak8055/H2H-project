import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

console.log("App Loaded");  // This will log when the app loads

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
