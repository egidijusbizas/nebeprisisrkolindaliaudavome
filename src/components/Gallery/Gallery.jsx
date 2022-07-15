import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import "./Gallery.css"

const Gallery = ({ pictures }) => {
  return (
    <div className='container gallery'>
      {
        pictures.map((picture, idx) => {
          return (
            <GalleryItem
              index={idx}
              id={picture.id}
              urls={picture.urls}
              />
          );
        })
      }
    </div>
  );
}

export default Gallery;