import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';
import { Gallery, Footer } from '../components';
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

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e);
    setSearchMade(true);
    loadNextPage();
  };

  const spreadPictures = (data) => {
    setSearchPictures([...searchPicturesRef.current, ...data]);
  };

  const loadNextPage = () => {
    setLoadingPicturesToggle(true);
    setSearchPage(searchPageRef.current + 1);
    console.log('Parsing page', searchPageRef.current, 'of', searchTermRef.current);
    getPicturesBySearchTerm(searchPageRef.current, searchTermRef.current, spreadPictures);
  };

  // console.log('SEARCH STATE', searchTermRef.current, searchPicturesRef.current, searchPageRef.current);

  return (
    <div className={searchMade ? 'container' : 'container filler'}>
      <div className='box'>
        <h1>Search for images here...</h1>
        <Form onSubmit={handleSearchSubmit}>
          <Form.Group className='mb-3' controlId='searchBox'>
            <Form.Label>Enter keywords below</Form.Label>
            <Form.Control as='input' placeholder='Cats' onChange={handleSearchChange} />
          </Form.Group>
          <div className='d-grid'>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>

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
