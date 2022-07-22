import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Routing from './Routing';

const ContentWrapper = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'content darkmode' : 'content'}>
      <Routing />
    </div>
  );
};

export default ContentWrapper;
