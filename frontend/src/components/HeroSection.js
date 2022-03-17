import React from 'react';
import ReactPlayer from "react-player";

import './HeroSection.css';
import '../App.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
    <h1>JOIN US</h1>
  <ReactPlayer
    url="https://www.youtube.com/watch?v=Sqqj_14wBxU"
  />
</div>
    
  )
}

export default HeroSection
