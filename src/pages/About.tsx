import React from 'react';
import logo from '../assets/logo72.png';

const About: React.FC = () => {
  return (
    <div className='container filler'>
      <div className='box'>
        <img src={logo} alt='logo' height='72'></img>
        <h1>About us</h1>
        <p>We provide images for you to scroll away.</p>
      </div>
    </div>
  );
};

export default About;
