import React, { useRef, useState } from 'react';
import { Gallery, Footer, SearchBox } from '../components';
import { getPicturesBySearchTerm } from '../api/Client';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPage, setSearchPage] = useState(0);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState(false);
  const [searchMade, setSearchMade] = useState(false);
  const [searchPictures, setSearchPictures] = useState([]);

  let searchPageRef = useRef({});
  let searchTermRef = useRef({});
  let searchPicturesRef = useRef({});

  searchPicturesRef.current = searchPictures;
  searchTermRef.current = searchTerm;
  searchPageRef.current = searchPage;

  const resetState = () => {
    setSearchPictures([]);
    setSearchPage(0);
    searchPicturesRef.current = searchPictures;
    searchPageRef.current = searchPage;
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchMade) {
      resetState();
    }
    setSearchMade(true);
    loadNextPage();
  };

  const spreadPictures = (data) => {
    setSearchPictures([...searchPicturesRef.current, ...data]);
  };

  const loadNextPage = () => {
    setLoadingPicturesToggle(true);
    setSearchPage(searchPageRef.current + 1);
    // console.log('Parsing page', searchPageRef.current, 'of', searchTermRef.current);
    getPicturesBySearchTerm(searchPageRef.current, searchTermRef.current, spreadPictures);
  };

  // console.log('SEARCH STATE', searchTermRef.current, searchPicturesRef.current, searchPageRef.current);

  return (
    <div className={searchMade ? 'container column fullwidth' : 'container filler'}>
      <SearchBox handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} />

      {searchMade ? (
        <div>
          <Gallery pictures={searchPicturesRef.current} />
          <Footer loadNextPage={loadNextPage} loadingPicturesToggle={loadingPicturesToggle} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Search;
