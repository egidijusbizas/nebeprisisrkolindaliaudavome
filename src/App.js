import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Gallery, Navbar } from './components';
import { getPictures } from './api/Client';

// import { Route, Routes } from 'react-router-dom';


import React, { useEffect, useRef, useState } from 'react';

function App() {

  const [page, setPage] = useState(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState(false);
  const [pictures, setPictures] = useState([]);

  let pageRef = useRef({});
  let picturesRef = useRef({});
  const bottomReached = useRef();

  picturesRef.current = pictures
  pageRef.current = page


  const spreadPictures = (data) => {
    setPictures([...picturesRef.current, ...data])
  };


  const loadNextPage = () => {
      setLoadingPicturesToggle(true)
      setPage(pageRef.current + 1)
      console.log("Parsing page", pageRef.current)
      getPictures(pageRef.current, spreadPictures)
    };
 

  useEffect(() => {
    getPictures(pageRef.current, spreadPictures);

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        loadNextPage();
      }
      console.log('entry', entry);
      console.log('entry.isIntersecting', entry.isIntersecting);
    });
    observer.observe(bottomReached.current);

  },  []);
  
  console.log(picturesRef.current, pageRef.current);

  return (
    <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures/:id" element={<FullSizeItem />} />        /* </Routes> */}


        <div>
          {/* <p>{JSON.stringify(picturesRef.current)}</p> */}
          <Gallery pictures={picturesRef.current}/>
        </div>

        <div
          ref={bottomReached}
          id='bottomDiv'
          className='footer'
          >
          <span style={{display: loadingPicturesToggle ? "block": "none", "color":'white', textAlign:'center'}}><h1>There's more...</h1></span>
        </div>
    </div>
  );
}

export default App;
