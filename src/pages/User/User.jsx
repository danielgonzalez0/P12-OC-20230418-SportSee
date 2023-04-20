import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMainUserData } from '../../scripts/4_GetDataService/callMainUserData';
import NotFound from '../NotFound/NotFound';
import caloriesIcon from '../User/calories-icon.png';
import proteinIcon from '../User/protein-icon.png';
import glucidIcon from '../User/carbs-icon.png';
import lipidIcon from '../User/fat-icon.png';
import ActivityChart from '../../components/activityChart/ActivityChart';
import TimeSessionsChart from '../../components/TimeSessionsChart/TimeSessionsChart';
import { SpecificError } from '../../scripts/2_models/ErrorData';
import PerformanceChart from '../../components/performanceChart/PerformanceChart';
import TodayScoreChart from '../../components/todayScoreChart/TodayScoreChart';

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
    if (
      userMainData instanceof SpecificError === true ||
      userMainData instanceof Error === true
    ) {
      setIsError(true);
      setIsLoading(false);
      setErrorData(userMainData);
    } else {
      setUserMainData(userMainData);
      setTimeout(() => setIsLoading(false), 1000);
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
        <h1>Bonjour {userMainData.firstName}</h1>
        <main>
          <ActivityChart id={id} />
          <TimeSessionsChart id={id} />
          <PerformanceChart id={id} />
          <TodayScoreChart score={userMainData.todayScore} />
        </main>
        <aside>
          <div className="aside-container" id="caloriesInfos">
            <img src={caloriesIcon} alt="calories-icon" />
            <h4>{userMainData.calorieCount.toLocaleString('en-US')}kCal</h4>
            <p>Calories</p>
          </div>
          <div className="aside-container" id="ProteinesInfos">
            <img src={proteinIcon} alt="proteines-icon" />
            <h4>{userMainData.proteinCount.toLocaleString('en-US')}g</h4>
            <p>Proteines</p>
          </div>
          <div className="aside-container" id="glucidsInfos">
            <img src={glucidIcon} alt="glucids-icon" />
            <h4>{userMainData.carbohydrateCount.toLocaleString('en-US')}g</h4>
            <p>Glucides</p>
          </div>
          <div className="aside-container" id="lipidsInfos">
            <img src={lipidIcon} alt="lipids-icon" />
            <h4>{userMainData.lipidCount.toLocaleString('en-US')}g</h4>
            <p>Lipides</p>
          </div>
        </aside>
      </div>
    );
};

export default User;
