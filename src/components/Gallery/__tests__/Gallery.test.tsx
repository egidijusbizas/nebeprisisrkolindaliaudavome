import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { apiResponsePayloadPage1, apiResponsePayloadPage2 } from '../__mocks__/ClientMocks';
import Gallery from '../Gallery';
import React from 'react';

test('Gallery component with pictures displays 10 gallery items', () => {
  const { container } = render(
    <BrowserRouter>
      <Gallery pictures={apiResponsePayloadPage1} />
    </BrowserRouter>
  );
  const galleryItems = container.getElementsByClassName('gallery__item_box');
  expect(galleryItems.length).toBe(10);
});

test('Gallery component with spread pictures displays 20 gallery items', () => {
  const { container } = render(
    <BrowserRouter>
      <Gallery pictures={[...apiResponsePayloadPage1, ...apiResponsePayloadPage2]} />
    </BrowserRouter>
  );
  const galleryItems = container.getElementsByClassName('gallery__item_box');
  expect(galleryItems.length).toBe(20);
});

test('Gallery component with has the label of the first picture', () => {
  const { container } = render(
    <BrowserRouter>
      <Gallery pictures={apiResponsePayloadPage1} />
    </BrowserRouter>
  );
  const galleryItems = container.getElementsByClassName('gallery__item_box');
  expect(galleryItems[0]).toHaveTextContent('Picture 1');
});
