import React from 'react';
import '../components/GalleryItem/GalleryItem.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const PictureDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { urls } = useLocation().state as any;
  const sizes = Object.keys(urls);

  const Links = () => {
    return (
      <>
        <p>Get alternative sizes</p>
        <div className='list-group'>
          {sizes.map((name, idx) => {
            return (
              <a href={urls[name]} key={idx} className='list-group-item list-group-item-action'>
                {name}
              </a>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className='flexcontainer'>
      <div className='flexcolumn'>
        <button type='button' className='btn btn-light btn-lg fullwidth' onClick={() => navigate(-1)}>
          Back
        </button>
        <div className='gallery__item_box gallery__item_box_capped'>
          <h1>Image {id}</h1>
          {urls.thumb && <img src={urls.thumb}></img>}
          <Links />
        </div>
      </div>
    </div>
  );
};

export default PictureDetails;
