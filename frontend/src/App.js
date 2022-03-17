import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
