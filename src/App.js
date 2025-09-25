import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Support from './Support';
import Privacy from './Privacy';
import RewireIdPrivacy from './BrainIdPrivacy';
import Terms from './Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/brain-id-privacy" element={<RewireIdPrivacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;

