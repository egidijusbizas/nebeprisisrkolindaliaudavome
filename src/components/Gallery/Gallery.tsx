import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';
import { PictureUrls, PicturesData } from '../../types/DataTypes';

interface Props {
  pictures: Array<PicturesData>;
}

const Gallery = (props: Props) => {
  const { pictures } = props;
  return (
    <div className='container gallery'>
      {pictures.map((picture: PicturesData, idx: number) => {
        return <GalleryItem key={picture.id + idx} id={picture.id} urls={picture.urls as PictureUrls} />;
      })}
    </div>
  );
};

export default Gallery;
