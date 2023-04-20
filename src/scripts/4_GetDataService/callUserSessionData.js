import { SpecificError } from '../2_models/ErrorData';
import { GetSessionDurationDataFromDB, UserDataSessionDuration } from '../3_factories/UserDataSessionDurationFactory';

// put 'mocked' if your want data from mocked db or put 'backend-server" if you want dat from backend server
const getType = 'mocked';
const url = '../mockedData.json';

/**
 * return one specific user main infos
 * @param {string} id user id
 * @returns {array} user main data
 */
export const getUserDataSession = async (id) => {
  try {
    if (!id) {
      throw new SpecificError('Erreur404', "La page n'existe pas");
    } else {
      const getData = await new GetSessionDurationDataFromDB(url, id, getType);
      if (
        getData instanceof SpecificError === true ||
        getData instanceof Error
      ) {
        throw getData;
      } else {
        if (getData.length > 0) {
          const userData = new UserDataSessionDuration(getData, getType);
          return userData;
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
