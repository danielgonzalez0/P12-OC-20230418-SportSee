import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from '../User/User';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

/**
 * React component given the router DOM of the application
 * @returns {React.ReactElement} Router
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
