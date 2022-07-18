import './Footer.css'
import React, { useEffect, useRef } from 'react';

const Footer = ( {loadNextPage, loadingPicturesToggle} ) => {

  const bottomReached = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        loadNextPage();
      }

    });
    observer.observe(bottomReached.current);

  },  []);
  
  return (
    <div
        ref={bottomReached}
        id='bottomDiv'
        className='footer'
    >
        <span style={{display: loadingPicturesToggle ? "block": "none", "color":'white', textAlign:'center'}}>
            <h1>There's more...</h1>
        </span>
    </div>
  );
}


export default Footer