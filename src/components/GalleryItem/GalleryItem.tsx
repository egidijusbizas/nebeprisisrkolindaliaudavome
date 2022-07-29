import './GalleryItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { PictureUrls } from '../../types/DataTypes';

interface Props {
  id: string;
  urls: PictureUrls;
}

const GalleryItem = (props: Props) => {
  const { id, urls } = props;
  const pageUrl = `/picturedetails/${id}`;

  return (
    <Link to={pageUrl} state={{ urls }}>
      <div className='gallery__item_box gallery__item_box_hover gallery__item_box_gallery'>
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
