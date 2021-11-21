import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
