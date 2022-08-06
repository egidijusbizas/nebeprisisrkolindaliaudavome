import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';
import { PictureUrls, PicturesData } from '../../types/DataTypes';

interface Props {
  pictures: Array<PicturesData>;
  firstLoad: boolean;
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

const Gallery: React.FC<Props> = (props) => {
  const { pictures, firstLoad } = props;
  return pictures.length ? (
    <div className='gallery__base'>
      {pictures.map((picture: PicturesData, idx: number) => {
        return <GalleryItem key={picture.id + idx} id={picture.id} urls={picture.urls as PictureUrls} />;
      })}
    </div>
  ) : (
    <div className='flexcontainer flexcolumn box'>{firstLoad ? <FirstLoad /> : <FailedToRender />}</div>
  );
};

export default Gallery;
