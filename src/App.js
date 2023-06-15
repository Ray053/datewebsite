import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/src/pages/register.jsx' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
