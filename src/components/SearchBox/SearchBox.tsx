import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
  /* eslint-disable no-unused-vars  */
  handleSearchChange: (searchTerm: string) => void;
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  lastSearchEntry: string;
  /* eslint-enable no-unused-vars */
}

const SearchBox: React.FC<Props> = (props) => {
  const { handleSearchSubmit, handleSearchChange, lastSearchEntry } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    handleSearchChange(searchTerm);
  };
  const disableToggle = !searchTerm || searchTerm === lastSearchEntry;

  return (
    <div className='box'>
      <h1>Search for images here...</h1>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Group className='mb-3' controlId='searchBox'>
          <Form.Label>Enter keywords below</Form.Label>
          <Form.Control as='input' placeholder='Cats' onChange={handleSearchInputChange} />
        </Form.Group>
        <div className='d-grid'>
          <Button disabled={disableToggle} variant='primary' type='submit'>
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchBox;
