import React, { useEffect, useState } from 'react';
import { getUserDataActivity } from '../../scripts/4_GetDataService/callUserActivityData';
import PropTypes from 'prop-types';

/**
 * React component given the HTML structure of the activity chart
 * @param {PropTypes} id
 * @returns {React.ReactElement} ActivityChart
 */
const ActivityChart = ({ id }) => {
  const [userActivityData, setUserActivityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({});

  /**
   * get user data from the API and handle errors
   * @param {string} id
   */
  const getUserData = async (id) => {
    const userData = await getUserDataActivity(id);
    if (userData.id === parseInt(id)) {
      setUserActivityData(userData);
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
          <div className="activityChart-Container">
            <p>chart Activity</p>
            <p>{userActivityData.id}</p>
            <ul>
              {userActivityData.sessions.map((session, index) => (
                <li key={index}>
                  day: {session.day} cal: {session.calories} kg:{' '}
                  {session.kilogram}
                </li>
              ))}
            </ul>
          </div>

          
        );
};

ActivityChart.propTypes = {
  id: PropTypes.string,
};

export default ActivityChart;
