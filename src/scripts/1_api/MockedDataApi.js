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
  async getUserMainDataMocked(id) {
    try {
      const data = await this.getData();
      if (
        data instanceof SpecificError === false &&
        data instanceof Error === false
      ) {
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

  /**
   * get user activity data from mocked database
   * @param {string} id
   * @returns {Array} array with user activity data from mocked database
   */
  async getUserActivityDataMocked(id) {
    try {
      const data = await this.getData();
      if (
        data instanceof SpecificError === false &&
        data instanceof Error === false
      ) {
        const userDataArray = data.USER_ACTIVITY.filter(
          (user) => user.userId === parseInt(id)
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

  /**
   * get user sessions data from mocked database
   * @param {string} id
   * @returns {Array} array with user sessions data from mocked database
   */
  async getUserSessionsDataMocked(id) {
    try {
      const data = await this.getData();
      if (
        data instanceof SpecificError === false &&
        data instanceof Error === false
      ) {
        const userDataArray = data.USER_AVERAGE_SESSIONS.filter(
          (user) => user.userId === parseInt(id)
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

  /**
   * get user performance data from mocked database
   * @param {string} id
   * @returns {Array} array with user performance data from mocked database
   */
  async getUserPerformanceDataMocked(id) {
    try {
      const data = await this.getData();
      if (
        data instanceof SpecificError === false &&
        data instanceof Error === false
      ) {
        const userDataArray = data.USER_PERFORMANCE.filter(
          (user) => user.userId === parseInt(id)
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
