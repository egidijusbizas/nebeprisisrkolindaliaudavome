import './App.css';

import React from 'react';

import Navigation from './components/Navigation/Navigation';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import { ThemeContextProvider } from './contexts/ThemeContext';

const App: React.FC = () => (
  <div className='App'>
    <ThemeContextProvider>
      <Navigation />
      <ContentWrapper />
    </ThemeContextProvider>
  </div>
);

export default App;
