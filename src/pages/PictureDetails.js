import React from 'react';
import '../components/GalleryItem/GalleryItem.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function PictureDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { urls } = location.state;
  const sizes = Object.keys(urls);

  return (
    <div className='container'>
      <div className='container filler'>
        <div className='column'>
          <button type='button' className='btn btn-light btn-lg fullwidth' onClick={() => navigate(-1)}>
            Back
          </button>

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
      </div>
    </div>
  );
}

export default PictureDetails;
