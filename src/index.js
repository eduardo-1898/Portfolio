import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Aboutme from './Components/Aboutme.js';
import Home from './Components/Home.js';
import Experience from './Components/Experience.js';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
