import { Gallery, Footer } from '../components';
import { ErrorBox, FlexContainer, Filler } from '../components/Common/Common';
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
  const [error, setError] = useState<string>('');
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [pictures, setPictures] = useState<Array<PicturesData>>([]);

  const pageRef = useRef<number>(1);
  const picturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  picturesRef.current = pictures;
  pageRef.current = page;

  const getDataOrError = (data: Array<PicturesData>): void => {
    if (!data) {
      setError('Service unavailable, try again later...');
    } else {
      spreadPictures(data);
    }
  };

  const spreadPictures = (data: Array<PicturesData>): void => {
    data && setPictures([...picturesRef.current, ...data]);
    setLoadingPicturesToggle(false);
  };

  const setNextPage = (): void => {
    setPage(pageRef.current + 1);
  };

  const loadNextPage = (): void => {
    setLoadingPicturesToggle(true);
    getPictures(client, pageRef.current, getDataOrError);
  };

  useEffect(() => {
    getPictures(client, pageRef.current, getDataOrError);
  }, []);

  useEffect(() => {
    pageRef.current > 1 && loadNextPage();
  }, [pageRef.current]);

  // console.log(pageRef.current, picturesRef.current);
  return (
    <FlexContainer>
      {error ? <ErrorBox error={error} /> : <Gallery pictures={picturesRef.current} firstLoad={pageRef.current === 1} />}
      {picturesRef.current.length !== 0 ? <Footer setNextPage={setNextPage} loadingPicturesToggle={loadingPicturesToggle} /> : <Filler />}
    </FlexContainer>
  );
};

export default Home;
