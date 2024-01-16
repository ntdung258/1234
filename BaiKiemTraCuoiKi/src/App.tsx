import React from 'react';
import Home from './pages/Home/Home';
import MovieDetail from './pages/Detail/Index';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
