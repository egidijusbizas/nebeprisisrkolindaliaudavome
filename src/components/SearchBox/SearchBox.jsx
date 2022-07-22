import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Gallery = ({ handleSearchSubmit, handleSearchChange }) => {
  return (
    <div className='box sticky'>
      <h1>Search for images here...</h1>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Group className='mb-3' controlId='searchBox'>
          <Form.Label>Enter keywords below</Form.Label>
          <Form.Control as='input' placeholder='Cats' onChange={handleSearchChange} />
        </Form.Group>
        <div className='d-grid'>
          <Button variant='primary' type='submit'>
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Gallery;
