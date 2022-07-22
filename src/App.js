import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Routing from './pages/Routing';

const App = () => (
  <div className='App'>
    <Navigation />
    <div className='content'>
      <Routing />
    </div>
  </div>
);

export default App;
