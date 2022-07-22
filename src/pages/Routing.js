import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import About from './About';
import Search from './Search';
import PictureDetails from './PictureDetails';

const Routing = () => (
  /* eslint-disable no-unused-vars */
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/search' element={<Search />} />
    <Route path='/picturedetails/:id' element={<PictureDetails />} />
  </Routes>
  /* eslint-enable no-unused-vars */
);

export default Routing;
