import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Donate from './components/pages/Donate';
import Books from './components/pages/Books';
import Medicine from './components/pages/Medicine';
import Cloths from './components/pages/Cloths';
import Amount from './components/pages/Amount';
import UserProfile from './components/pages/UserProfile';
import Help from './components/pages/Help';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/donate' exact element={<Donate />} />
        <Route path='/donatebook' exact element={<Books />} />
        <Route path='/donatemedicine' exact element={<Medicine />} />
        <Route path='/donatecloths' exact element={<Cloths />} />
        <Route path='/donateamount' exact element={<Amount />} />

        <Route path='/userprofile' exact element={<UserProfile />} />

        <Route path='/help' exact element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
