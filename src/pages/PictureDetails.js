import React from 'react';
import '../components/GalleryItem/GalleryItem.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function PictureDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { urls } = location.state;
  const sizes = Object.keys(urls);

  return (
    <div className='container'>
      <div className='gallery__item_box'>
        <h1>Image {id}</h1>
        <img src={urls.thumb}></img>
        <p>Get alternate sizes</p>
        <div className='list-group'>
          {sizes.map((name, idx) => {
            return (
              <a href={urls[name]} key={idx} className='list-group-item list-group-item-action'>
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PictureDetails;
