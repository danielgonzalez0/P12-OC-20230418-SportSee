import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [userMainData, setUserMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('../mockedData.json')
      .then((res) => setUserMainData(res.data.USER_MAIN_DATA))
      .then(() => {
       setIsLoading(false);
      });
  }, []);

  if (isLoading === true) return <p>Données en cours de chargement</p>;

  if (!isLoading)
    return (
      <div>
        <h1>
          {userMainData[0].userInfos.firstName +
            ' ' +
            userMainData[0].userInfos.lastName}
        </h1>
      </div>
    );
};

export default User;
