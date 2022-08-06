import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../SearchBox';
import React from 'react';

describe('Search button', () => {
  test('is disabled upon render', () => {
    render(<SearchBox handleSearchChange={() => null} handleSearchSubmit={() => null} lastSearchEntry={''} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('is disabled  when current input matches last input', () => {
    render(<SearchBox handleSearchChange={() => null} handleSearchSubmit={() => null} lastSearchEntry={'test'} />);
    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
    expect(button).toBeDisabled();
  });

  test('is enabled upon typing test', () => {
    render(<SearchBox handleSearchChange={() => null} handleSearchSubmit={() => null} lastSearchEntry={''} />);
    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
    expect(button).not.toBeDisabled();
  });

  test('is enabled when current input does not match last input', () => {
    render(<SearchBox handleSearchChange={() => null} handleSearchSubmit={() => null} lastSearchEntry={'test'} />);
    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test2' } });
    expect(input).toHaveValue('test2');
    expect(button).not.toBeDisabled();
  });
});
