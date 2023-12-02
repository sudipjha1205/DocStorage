// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Homepage/Homepage';
import Services from './Pages/ServiceSection/serviceSection';
import Signin from './Pages/Signing/sign_in';
import NotFound from '../src/Components/NotFound/NotFound';

const RoutesFunc = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<Home/>} />
        <Route path="/contact" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/signin" element={<Signin/>} />
        {/* 404 Not Found Page */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default RoutesFunc;