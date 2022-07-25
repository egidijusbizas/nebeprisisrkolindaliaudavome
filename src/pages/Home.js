import { Gallery, Footer } from '../components';
import { getPictures } from '../api/Client';

import React, { useEffect, useRef, useState } from 'react';

function Home() {
  const [page, setPage] = useState(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState(false);
  const [pictures, setPictures] = useState([]);

  let pageRef = useRef({});
  let picturesRef = useRef({});

  picturesRef.current = pictures;
  pageRef.current = page;

  const spreadPictures = (data) => {
    setPictures([...picturesRef.current, ...data]);
  };

  const loadNextPage = () => {
    setLoadingPicturesToggle(true);
    setPage(pageRef.current + 1);
    // console.log('Parsing page', pageRef.current);
    getPictures(pageRef.current, spreadPictures);
  };

  useEffect(() => {
    getPictures(pageRef.current, spreadPictures);
  }, []);

  // console.log(picturesRef.current, pageRef.current);

  return (
    <div className='container column fullwidth'>
      <Gallery pictures={picturesRef.current} />
      <Footer loadNextPage={loadNextPage} loadingPicturesToggle={loadingPicturesToggle} />
    </div>
  );
}

export default Home;
