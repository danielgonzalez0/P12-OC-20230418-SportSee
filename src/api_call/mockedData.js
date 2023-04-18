import { MockedDataApi } from './api';

/**
 * return one specific user main infos from mocked data
 * @param {string} id user id
 * @returns {array} user main data
 */
export const getMainUserData = async (id) => {
  try {
    const mockedData = new MockedDataApi('../mockedData.json');
    const data = await mockedData.getData();
    const userMainData = data.USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(id)
    );
    return userMainData;
  } catch (error) {
    console.log(error);
  }
};
