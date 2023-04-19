import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * React component given the HTML structure of the error page
 * @returns {React.ReactElement} NotFound
 */
const NotFound = ({ errorData }) => {
  return (
    <div>
      <h1>{errorData._name}</h1>
      <h2>{errorData._message}</h2>
      <NavLink to="/">
        <p>Retourner sur la page d&apos;accueil</p>
      </NavLink>
    </div>
  );
};

NotFound.propTypes = {
  errorData: PropTypes.object,
};

export default NotFound;
