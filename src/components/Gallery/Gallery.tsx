import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';
import { PictureUrls, PicturesData } from '../../types/DataTypes';

interface Props {
  pictures: Array<PicturesData>;
}

const Gallery: React.FC<Props> = (props) => {
  const { pictures } = props;
  return pictures.length ? (
    <div className='gallery__base'>
      {pictures.map((picture: PicturesData, idx: number) => {
        return <GalleryItem key={picture.id + idx} id={picture.id} urls={picture.urls as PictureUrls} />;
      })}
    </div>
  ) : (
    <div className='flexcontainer flexcolumn box'>
      <h1>{`We were not able to retrieve any pictures...`}</h1>
      <p>{`Please try again later!`}</p>
    </div>
  );
};

export default Gallery;
