import { Gallery, Footer } from '../components';
import { getPictures } from '../api/Client';

import React, { useEffect, useRef, useState } from 'react';

function Home(): JSX.Element {
  
  interface PictureUrls {
    raw?: string,
    full?: string, 
    regular?: string,
    small?: string,
    thumb?: string,
    s3?: string
  }

  interface PicturesData {
    id: string,
    urls: Array<PictureUrls>
  }

  const [page, setPage] = useState<number>(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [pictures, setPictures] = useState<Array<PicturesData>>([]);

  let pageRef = useRef<number>(1);
  let picturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  picturesRef.current = pictures;
  pageRef.current = page;

  const spreadPictures = (data: []) => {
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
