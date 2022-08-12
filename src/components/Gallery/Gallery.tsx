import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';
import { PictureUrls, PicturesData } from '../../types/DataTypes';

interface Props {
  pictures: Array<PicturesData>;
  firstLoad: boolean;
  noData: boolean;
}

const FailedToRender: React.FC = () => {
  return (
    <>
      <h1>{`We were not able to retrieve any pictures...`}</h1>
      <p>{`Please try again later!`}</p>
    </>
  );
};

const FirstLoad: React.FC = () => {
  return (
    <>
      <h1>{`Please wait...`}</h1>
    </>
  );
};

const NoData: React.FC = () => {
  return (
    <>
      <h1>{`You've reached the bottom...`}</h1>
    </>
  );
};

const Gallery: React.FC<Props> = (props) => {
  const { pictures, firstLoad, noData } = props;

  const resolveComponent = (): React.ReactNode => {
    if (!noData && firstLoad) {
      return <FirstLoad />;
    } else if (noData) {
      return <NoData />;
    } else {
      return <FailedToRender />;
    }
  };

  const RenderGallery: React.FC = () => {
    return (
      <>
        <div className='gallery__base'>
          {pictures.map((picture: PicturesData, idx: number) => {
            return <GalleryItem key={picture.id + idx} id={picture.id} urls={picture.urls as PictureUrls} />;
          })}
        </div>
        {noData && (
          <div className='flexcontainer flexcolumn box'>
            <NoData />
          </div>
        )}
      </>
    );
  };

  return pictures.length ? <RenderGallery /> : <div className='flexcontainer flexcolumn box'>{resolveComponent()}</div>;
};

export default Gallery;
