import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search() {
  return (
    <div className='container filler'>
      <div className='box'>
        <h1>Search for images here...</h1>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Enter keywords below</Form.Label>
            <Form.Control as='input' placeholder='Cats' />
          </Form.Group>
          <div className='d-grid'>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Search;
