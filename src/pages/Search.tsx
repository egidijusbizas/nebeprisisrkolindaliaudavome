import React from 'react';
import { Gallery, Footer, SearchBox } from '../components';
import { PicturesData } from '../types/DataTypes';
import { ErrorBox, Filler } from '../components/Common/Common';

interface Props {
  lastSearchEntry: string;
  searchMade: boolean;
  pictures: Array<PicturesData>;
  firstLoad: boolean;
  noData: boolean;
  setNextPage: () => void;
  loadingPicturesToggle: boolean;
  error: string;
  handleSearchChange: (searchTerm: string) => void; // eslint-disable-line no-unused-vars
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // eslint-disable-line no-unused-vars
}

const Search: React.FC<Props> = (props) => {
  const {
    lastSearchEntry,
    searchMade,
    pictures,
    firstLoad,
    noData,
    setNextPage,
    loadingPicturesToggle,
    error,
    handleSearchChange,
    handleSearchSubmit
  } = props;

  const SearchGallery = () => {
    return (
      <>
        <Gallery pictures={pictures} firstLoad={firstLoad} noData={noData} error={error} />
        {pictures.length !== 0 ? (
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

      {searchMade && pictures.length === 0 && error ? <ErrorBox error={error} /> : searchMade && <SearchGallery />}
      <div className='filler'>{searchMade && pictures.length !== 0 && error && <ErrorBox error={error} />}</div>
    </div>
  );
};

export default Search;
