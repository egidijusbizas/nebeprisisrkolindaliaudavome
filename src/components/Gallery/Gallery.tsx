import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';
import PropTypes from 'prop-types';

const Gallery = ({ pictures }) => {
  return (
    <div className='container gallery'>
      {pictures.map((picture, idx) => {
        return <GalleryItem key={picture.id + idx} id={picture.id} urls={picture.urls} />;
      })}
    </div>
  );
};

Gallery.PropTypes = {
  pictures: PropTypes.object.isRequired
};

export default Gallery;
