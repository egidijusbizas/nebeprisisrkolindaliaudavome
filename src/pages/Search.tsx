import React, { useRef, useState } from 'react';
import { Gallery, Footer, SearchBox } from '../components';
import { getPicturesBySearchTerm } from '../api/Client';
import { PicturesData } from '../types/DataTypes';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchPage, setSearchPage] = useState<number>(0);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [searchMade, setSearchMade] = useState<boolean>(false);
  const [searchPictures, setSearchPictures] = useState<Array<PicturesData>>([]);

  const searchPageRef = useRef<number>(0);
  const searchTermRef = useRef<string>('');
  const searchPicturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  searchPicturesRef.current = searchPictures;
  searchTermRef.current = searchTerm;
  searchPageRef.current = searchPage;

  const resetState = (): void => {
    setSearchPictures([]);
    setSearchPage(0);
    searchPicturesRef.current = searchPictures;
    searchPageRef.current = searchPage;
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (searchMade) {
      resetState();
    }
    setSearchMade(true);
    loadNextPage();
  };

  const spreadPictures = (data: Array<PicturesData>) => {
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
};

export default Search;
