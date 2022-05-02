import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './componentes/Home';
import App from './componentes/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
