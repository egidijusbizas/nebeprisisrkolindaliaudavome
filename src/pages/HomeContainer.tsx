import Home from './Home';
import { getPictures } from '../api/Client';
import { PicturesData } from '../types/DataTypes';

import React, { useEffect, useRef, useState } from 'react';
import { AxiosInstance } from 'axios';

interface Props {
  client: AxiosInstance;
}

const HomeContainer: React.FC<Props> = (props) => {
  const { client } = props;
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [pictures, setPictures] = useState<Array<PicturesData>>([]);
  const [noHomeData, setNoHomeData] = useState<boolean>(false);
  const pageRef = useRef<number>(1);
  const picturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  picturesRef.current = pictures;
  pageRef.current = page;

  const getDataOrError = (data: Array<PicturesData>): void => {
    if (typeof data === 'boolean' && !data) {
      setError('Service unavailable, try again later...');
    } else {
      spreadPictures(data);
    }
  };

  const spreadPictures = (data: Array<PicturesData>): void => {
    if (Array.isArray(data) && !data.length) {
      setNoHomeData(true);
    }
    data && setPictures([...picturesRef.current, ...data]);
    setLoadingPicturesToggle(false);
  };

  const setNextPage = (): void => {
    setPage(pageRef.current + 1);
  };

  const loadNextPage = (): void => {
    setLoadingPicturesToggle(() => true);
    getPictures(client, pageRef.current, getDataOrError);
  };

  useEffect(() => {
    !error && getPictures(client, pageRef.current, getDataOrError);
  }, []);

  useEffect(() => {
    !error && pageRef.current > 1 && loadNextPage();
  }, [pageRef.current]);

  // console.log(pageRef.current, picturesRef.current);
  return (
    <Home
      pictures={picturesRef.current}
      firstLoad={pageRef.current === 1}
      noData={noHomeData}
      setNextPage={setNextPage}
      loadingPicturesToggle={loadingPicturesToggle}
      error={error}
    />
  );
};

export default HomeContainer;
