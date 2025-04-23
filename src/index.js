import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './APP.jsx';  // Make sure this points to APP.jsx
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
