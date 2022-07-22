import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search() {
  return (
    <div className='container'>
      <div>
        <h1>Search here...</h1>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <p>We provide images for you to scroll away.</p>
      </div>
    </div>
  );
}

export default Search;
