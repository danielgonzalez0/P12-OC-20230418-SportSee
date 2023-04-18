import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMainUserData } from '../../api_call/mockedData';
import NotFound from '../NotFound/NotFound';

const User = () => {
  const [userMainData, setUserMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const { id } = useParams();

  const getUserData = async (id) => {
    const dataArray = await getMainUserData(id);
    if (dataArray.length === 0) {
      setIsError(true);
      setIsLoading(false);
    } else {
      setUserMainData(dataArray[0]);
      setIsLoading(false);
    }
    console.log(dataArray);
  };

  useEffect(() => {
    console.log(id);
    getUserData(id);
    // axios
    //   .get('../mockedData.json')
    //   .then((res) => setUserMainData(res.data.USER_MAIN_DATA))
    //   .then(() => {
    //     setIsLoading(false);
    //   });
  }, [id]);

  if (isLoading === true) return <p>Données en cours de chargement</p>;

  if (error === true) return <NotFound />;

  if (!isLoading && !error)
    return (
      <div>
        <h1>
          {userMainData.userInfos.firstName +
            ' ' +
            userMainData.userInfos.lastName}
        </h1>
      </div>
    );
};

export default User;
