import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMainUserData } from '../../scripts/4_GetDataService/callMainUserData';
import NotFound from '../NotFound/NotFound';

/**
 * React component given the HTML structure of the user page
 * @returns {React.ReactElement} User
 */
const User = () => {
  const [userMainData, setUserMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({});
  const { id } = useParams();

  /**
   * get user data from the API and handle errors
   * @param {string} id
   */
  const getUserData = async (id) => {
    const userMainData = await getMainUserData(id);
    if (userMainData._name) {
      setIsError(true);
      setIsLoading(false);
      setErrorData(userMainData);
    } else {
      setUserMainData(userMainData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData(id);
  }, [id]);

  if (isLoading) return <p>Données en cours de chargement</p>;

  if (error) return <NotFound errorData={errorData} />;

  if (!isLoading && !error)
    return (
      <div>
        <h1>{userMainData.firstName + ' ' + userMainData.lastName}</h1>
      </div>
    );
};

export default User;
