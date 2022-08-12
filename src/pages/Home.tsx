import { Gallery, Footer } from '../components';
import { FlexContainer, Filler } from '../components/Common/Common';
import { PicturesData } from '../types/DataTypes';

import React from 'react';

interface Props {
  pictures: Array<PicturesData>;
  firstLoad: boolean;
  noData: boolean;
  setNextPage: () => void;
  loadingPicturesToggle: boolean;
  error: string;
}

const Home: React.FC<Props> = (props) => {
  const { pictures, firstLoad, noData, setNextPage, loadingPicturesToggle, error } = props;

  return (
    <FlexContainer>
      <Gallery pictures={pictures} firstLoad={firstLoad} noData={noData} error={error} />
      <Footer setNextPage={setNextPage} loadingPicturesToggle={loadingPicturesToggle} noData={noData} />
      <Filler />
    </FlexContainer>
  );
};

export default Home;
