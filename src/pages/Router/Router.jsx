import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from '../User/User';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import { SpecificError } from '../../scripts/2_models/ErrorData';

/**
 * React component given the router DOM of the application
 * @returns {React.ReactElement} Router
 */
const Router = () => {
  const error = new SpecificError('Erreur 404', "La page n'existe pas");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound errorData={error} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
