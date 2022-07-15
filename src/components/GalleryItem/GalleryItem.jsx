import './GalleryItem.css'
import React from 'react';

const GalleryItem = ({ index, id, urls }) => {
  return (
    <div key={index + id} className='gallery__item_box'>
      <img alt='' src={urls.thumb} />
      <div>
        <p>Picture  {id}</p>
        <a href={urls.full}>See in full size</a>
      </div>
    </div>
  );
}

export default GalleryItem;