import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './pages/App';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

