import React, { useContext } from 'react';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { ThemeContext } from '../contexts/ThemeContext';
import Routing from './Routing';

const ContentWrapper: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'content darkmode' : 'content'}>
      <ScrollToTop />
      <Routing />
    </div>
  );
};

export default ContentWrapper;
