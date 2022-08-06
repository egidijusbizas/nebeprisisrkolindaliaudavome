import React, { useRef, useState } from 'react';
import { Gallery, Footer, SearchBox } from '../components';
import { getPicturesBySearchTerm } from '../api/Client';
import { PicturesData } from '../types/DataTypes';
import { AxiosInstance } from 'axios';

interface Props {
  client: AxiosInstance;
}

const Search: React.FC<Props> = (props) => {
  const { client } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [lastSearchEntry, setLastSearchEntry] = useState<string>('');
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
    setLastSearchEntry(searchTerm);
  };

  const spreadPictures = (data: Array<PicturesData>) => {
    data && setSearchPictures([...searchPicturesRef.current, ...data]);
  };

  const loadNextPage = () => {
    setLoadingPicturesToggle(true);
    setSearchPage(searchPageRef.current + 1);
    // console.log('Parsing page', searchPageRef.current, 'of', searchTermRef.current);
    getPicturesBySearchTerm(client, searchPageRef.current, searchTermRef.current, spreadPictures);
  };

  // console.log('SEARCH STATE', searchTermRef.current, searchPicturesRef.current, searchPageRef.current);

  return (
    <div className={searchMade ? 'flexcontainer flexcolumn fullwidth' : 'flexcontainer filler'}>
      <SearchBox handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} lastSearchEntry={lastSearchEntry} />

      {searchMade ? (
        <>
          <Gallery pictures={searchPicturesRef.current} />
          {searchPicturesRef.current.length !== 0 ? (
            <Footer loadNextPage={loadNextPage} loadingPicturesToggle={loadingPicturesToggle} />
          ) : (
            <div className='filler'></div>
          )}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
