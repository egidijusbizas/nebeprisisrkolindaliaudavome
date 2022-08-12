import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { client } from '../api/Client';
import HomeContainer from '../pages/HomeContainer';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PictureDetails from '../pages/PictureDetails';
import NotFound from '../pages/NotFound';
import SearchContainer from '../pages/SearchContainer';

const Routing: React.FC = () => (
  /* eslint-disable no-unused-vars */
  <Routes>
    <Route path='*' element={<NotFound />} />
    <Route path='/' element={<HomeContainer client={client} />} />
    <Route path='/about' element={<About />} />
    <Route path='/search' element={<SearchContainer client={client} />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/picturedetails/:id' element={<PictureDetails />} />
  </Routes>
  /* eslint-enable no-unused-vars */
);

export default Routing;
