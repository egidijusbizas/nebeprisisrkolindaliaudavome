import React, { createContext, useState } from 'react';

const RandomPicturesContext = createContext();

const RandomPicturesContextProvider = (props) => {
  const [page, setPage] = useState(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState(false);
  const [pictures, setPictures] = useState([]);

  return (
    <div>
      <RandomPicturesContext.Provider value={{ page, setPage, loadingPicturesToggle, setLoadingPicturesToggle, pictures, setPictures }}>
        {props.children}
      </RandomPicturesContext.Provider>
    </div>
  );
};

export { RandomPicturesContext, RandomPicturesContextProvider };
