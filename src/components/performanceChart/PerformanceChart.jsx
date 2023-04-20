import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserDataPerformance } from '../../scripts/4_GetDataService/callUserPerformanceData';

/**
 * React component given the HTML structure of the time session chart
 * @param {PropTypes} id
 * @returns {React.ReactElement} TimeSessionsChart
 */
const PerformanceChart = ({ id }) => {
  const [userPerformanceData, setUserPerformanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({});

  /**
   * get user data from the API and handle errors
   * @param {string} id
   */
  const getUserData = async (id) => {
    const userData = await getUserDataPerformance(id); // a modiifer
    if (userData.id === parseInt(id)) {
      setUserPerformanceData(userData);
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
      <div className="performanceChart-container">
        <p>chart Performance</p>
        <p>{userPerformanceData.id}</p>
        <ul>
          {userPerformanceData.data.map((data, index) => (
            <li key={index}>
              kind: {data.kind} value: {data.value}
            </li>
          ))}
        </ul>
      </div>
    );
};

PerformanceChart.propTypes = {
  id: PropTypes.string,
};

export default PerformanceChart;
