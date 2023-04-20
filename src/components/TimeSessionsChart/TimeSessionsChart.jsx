import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserDataSession } from '../../scripts/4_GetDataService/callUserSessionData';

/**
 * React component given the HTML structure of the time session chart
 * @param {PropTypes} id
 * @returns {React.ReactElement} TimeSessionsChart
 */
const TimeSessionsChart = ({ id }) => {
  const [userSessionData, setUserSessionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({});

  /**
   * get user data from the API and handle errors
   * @param {string} id
   */
  const getUserData = async (id) => {
    const userData = await getUserDataSession(id); // a modiifer
    if (userData.id === parseInt(id)) {
      setUserSessionData(userData);
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      setIsError(true);
      setIsLoading(false);
      setErrorData(userData);
    }
  };

  useEffect(() => {
    getUserData(id);
  }, [id]);

  //JSX
  if (isLoading) return <p>En cours de chargement</p>;

  if (error)
    return (
      <div className="error">
        <p>{errorData._name}</p>
        <p>{errorData._message}</p>
      </div>
    );

  if (!isLoading && !error)
    return (
      <div className="sessionChart-container">
        <p>chart Sessions length</p>
        <p>{userSessionData.id}</p>
        <ul>
          {userSessionData.sessions.map((session, index) => (
            <li key={index}>
              day: {session.day} duration: {session.sessionLength} min
            </li>
          ))}
        </ul>
      </div>
    );
};

TimeSessionsChart.propTypes = {
  id: PropTypes.string,
};

export default TimeSessionsChart;
