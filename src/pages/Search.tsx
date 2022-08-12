import React, { useRef, useState, useEffect } from 'react';
import { Gallery, Footer, SearchBox } from '../components';
import { getPicturesBySearchTerm } from '../api/Client';
import { PicturesData } from '../types/DataTypes';
import { AxiosInstance } from 'axios';
import { ErrorBox, Filler } from '../components/Common/Common';

interface Props {
  client: AxiosInstance;
}

const Search: React.FC<Props> = (props) => {
  const { client } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [lastSearchEntry, setLastSearchEntry] = useState<string>('');
  const [searchPage, setSearchPage] = useState<number>(1);
  const [loadingPicturesToggle, setLoadingPicturesToggle] = useState<boolean>(false);
  const [searchMade, setSearchMade] = useState<boolean>(false);
  const [searchPictures, setSearchPictures] = useState<Array<PicturesData>>([]);
  const [noData, setNoData] = useState<boolean>(false);
  const searchPageRef = useRef<number>(1);
  const searchTermRef = useRef<string>('');
  const searchPicturesRef = useRef<Array<PicturesData> | Array<any>>([]);

  searchPicturesRef.current = searchPictures;
  searchTermRef.current = searchTerm;
  searchPageRef.current = searchPage;

  const resetState = (): void => {
    setSearchPictures([]);
    setSearchPage(1);
    setError('');
    setNoData(false);
    searchPicturesRef.current = searchPictures;
    searchPageRef.current = searchPage;
  };

  const handleSearchChange = (searchTerm: string): void => {
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

  const getDataOrError = (data: Array<PicturesData>): void => {
    if (typeof data === 'boolean' && !data) {
      setError('Service unavailable, try again later...');
      console.log(error);
    } else {
      spreadPictures(data);
    }
  };

  const spreadPictures = (data: Array<PicturesData>) => {
    if (Array.isArray(data) && !data.length) {
      setNoData(true);
    }
    data && setSearchPictures([...searchPicturesRef.current, ...data]);
    setLoadingPicturesToggle(false);
  };

  const setNextPage = (): void => {
    setSearchPage(searchPageRef.current + 1);
  };

  const loadNextPage = () => {
    setLoadingPicturesToggle(true);
    getPicturesBySearchTerm(client, searchPageRef.current, searchTermRef.current, getDataOrError);
    // console.log('Parsing page', searchPageRef.current, 'of', searchTermRef.current);
  };

  useEffect(() => {
    searchMade && !error && loadNextPage();
  }, [searchPageRef.current]);
  // console.log('SEARCH STATE', searchTermRef.current, searchPicturesRef.current, searchPageRef.current);

  const SearchGallery = () => {
    return (
      <>
        <Gallery pictures={searchPicturesRef.current} firstLoad={searchPageRef.current === 1} noData={noData} />
        {searchPicturesRef.current.length !== 0 ? (
          <Footer setNextPage={setNextPage} loadingPicturesToggle={loadingPicturesToggle} noData={noData} />
        ) : (
          <Filler />
        )}
      </>
    );
  };

  return (
    <div className={searchMade ? 'flexcontainer flexcolumn fullwidth' : 'flexcontainer filler'}>
      <SearchBox handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} lastSearchEntry={lastSearchEntry} />

      {searchMade && searchPicturesRef.current.length === 0 && error ? <ErrorBox error={error} /> : searchMade && <SearchGallery />}
      <div className='filler'>{searchMade && searchPicturesRef.current.length !== 0 && error && <ErrorBox error={error} />}</div>
    </div>
  );
};

export default Search;
