import { Gallery, Footer } from '../components';
import { getPictures } from '../api/Client';
import { PicturesData } from '../types/DataTypes';

import React, { useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [pictures, setPictures] = useState<Array<PicturesData>>([]);

  const pageRef = useRef<number>(1);
  const picturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  picturesRef.current = pictures;
  pageRef.current = page;

  const spreadPictures = (data: Array<PicturesData>): void => {
    setPictures([...picturesRef.current, ...data]);
  };

  const loadNextPage = (): void => {
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
};

export default Home;
