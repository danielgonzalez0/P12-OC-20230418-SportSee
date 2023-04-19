import React from 'react';
import PropTypes from 'prop-types';

/**
 * React component given the HTML structure of the error page
 * @returns {React.ReactElement} NotFound
 */
const NotFound = ({ errorData }) => {
  return (
    <div>
      <h1>{errorData._name}</h1>
      <h2>{errorData._message}</h2>
    </div>
  );
};

NotFound.propTypes = {
  errorData: PropTypes.object,
};

export default NotFound;
