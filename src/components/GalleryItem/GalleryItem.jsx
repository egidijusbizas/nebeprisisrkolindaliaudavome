import './GalleryItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ id, urls }) => {
  const pageUrl = `/picturedetails/${id}`;

  return (
    <Link to={pageUrl} state={{ urls }}>
      <div className='gallery__item_box'>
        <img alt='' src={urls.thumb} />
        <div>
          <p>Picture {id}</p>
          <a href={urls.full}>See in full size</a>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
