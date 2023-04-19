import { SpecificError } from '../2_models/ErrorData';
import { Api } from './api';

export class MockedDataApi extends Api {
  // eslint-disable-next-line
  constructor(url) {
    super(url);
  }
  /**
   * get user main data from mocked database
   * @param {string} id
   * @returns {Array} array with user main data from mocked database
   */
  async getUserNainDataMocked(id) {
    try {
      const data = await this.getData();
      if (data instanceof SpecificError === false) {
        const userDataArray = data.USER_MAIN_DATA.filter(
          (user) => user.id === parseInt(id)
        );
        return userDataArray;
      } else {
        throw data;
      }
    } catch (err) {
      const error = err;
      return error;
    }
  }
}
