import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
// import React, { lazy } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
// import Main from './layouts/Main'; // fallback for lazy pages
// import './static/css/main.scss'; // All of our styles

// const { PUBLIC_URL } = process.env;

// const About = lazy(() => import('./pages/About'));
// const NotFound = lazy(() => import('./pages/NotFound'));
// const Home = import('./pages/Home')

const App = () => (
  <div className='App'>
    <Navigation />
    <Home />

    {/* // <About /> */}
  </div>
);

export default App;
