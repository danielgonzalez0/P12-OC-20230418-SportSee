import { SpecificError } from '../2_models/ErrorData';
import {
  GetMainDataFromDB,
  UserMainData,
} from '../3_factories/UserMainDataFactory';

// put 'mocked' if your want data from mocked db or put 'backend-server" if you want dat from backend server
const getType = 'mocked';
const url = '../mockedData.json';

/**
 * return one specific user main infos
 * @param {string} id user id
 * @returns {array} user main data
 */
export const getMainUserData = async (id) => {
  try {
    if (!id) {
      throw new SpecificError('Erreur404', "La page n'existe pas");
    } else {
      const getData = await new GetMainDataFromDB(url, id, getType);
      if (getData instanceof SpecificError === true) {
        throw getData;
      } else {
        if (getData.length > 0) {
          const userMainData = new UserMainData(getData, getType);
          return userMainData;
        } else {
          throw new SpecificError('Erreur 404', "La page n'existe pas");
        }
      }
    }
  } catch (err) {
    const error = err;
    return error;
  }
};
