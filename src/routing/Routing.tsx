import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { client } from '../api/Client';

import Home from '../pages/Home';
import About from '../pages/About';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PictureDetails from '../pages/PictureDetails';
import NotFound from '../pages/NotFound';

const Routing: React.FC = () => (
  /* eslint-disable no-unused-vars */
  <Routes>
    <Route path='*' element={<NotFound />} />
    <Route path='/' element={<Home client={client} />} />
    <Route path='/about' element={<About />} />
    <Route path='/search' element={<Search client={client} />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/picturedetails/:id' element={<PictureDetails />} />
  </Routes>
  /* eslint-enable no-unused-vars */
);

export default Routing;
