import React from 'react';
import { useParams } from 'react-router-dom';

function PictureDetails() {
  const { id } = useParams();

  return (
    <div className='container'>
      <div>
        <h1>Image {id}</h1>
        <p>More info to be found here soon</p>
      </div>
    </div>
  );
}

export default PictureDetails;
