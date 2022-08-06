import React, { useContext } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { ThemeContext } from '../../contexts/ThemeContext';
import Routing from '../../routing/Routing';

const ContentWrapper: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className={darkMode ? 'content darkmode' : 'content'}>
        <ScrollToTop />
        <Routing />
      </div>
    </div>
  );
};

export default ContentWrapper;
