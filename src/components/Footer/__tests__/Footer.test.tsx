import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

import { configure } from '@testing-library/dom';
configure({ testIdAttribute: 'id' });

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('Footer text is visible with loading toggle true', () => {
  render(<Footer loadNextPage={() => console.log} loadingPicturesToggle={true} />);
  const h1Element = screen.getByText(/there is more.../i);
  expect(h1Element).toBeVisible();
});

test('Footer text is not visible with loading toggle false', () => {
  const h1: HTMLHeadingElement = document.createElement('h1') as HTMLHeadingElement;

  render(<Footer loadNextPage={() => console.log} loadingPicturesToggle={false} />);
  const bottomDiv = screen.getByTestId('bottomDiv');
  expect(bottomDiv).not.toContainElement(h1);
});
