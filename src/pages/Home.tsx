import { Gallery, Footer } from '../components';
import { getPictures } from '../api/Client';
import { PicturesData } from '../types/DataTypes';

import React, { useEffect, useRef, useState } from 'react';
import { AxiosInstance } from 'axios';

interface Props {
  client: AxiosInstance;
}

const Home: React.FC<Props> = (props) => {
  const { client } = props;
  const [page, setPage] = useState<number>(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [pictures, setPictures] = useState<Array<PicturesData>>([]);

  const pageRef = useRef<number>(1);
  const picturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  picturesRef.current = pictures;
  pageRef.current = page;

  const spreadPictures = (data: Array<PicturesData>): void => {
    data && setPictures([...picturesRef.current, ...data]);
  };

  const loadNextPage = (): void => {
    setLoadingPicturesToggle(true);
    setPage(pageRef.current + 1);
    // console.log('Parsing page', pageRef.current);
    getPictures(client, pageRef.current, spreadPictures);
  };

  useEffect(() => {
    getPictures(client, pageRef.current, spreadPictures);
  }, []);

  // console.log(picturesRef.current, pageRef.current);

  return (
    <div className='flexcontainer flexcolumn fullwidth'>
      <Gallery pictures={picturesRef.current} />
      {picturesRef.current.length !== 0 ? (
        <Footer loadNextPage={loadNextPage} loadingPicturesToggle={loadingPicturesToggle} />
      ) : (
        <div className='filler'></div>
      )}
    </div>
  );
};

export default Home;
