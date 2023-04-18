import axios from 'axios';

/**
 * return API url
 * @param {string} url: API url
 */
class Api {
  constructor(url) {
    this._url = url;
  }
  async getData() {
    return axios
      .get(this._url)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
}
export class MockedDataApi extends Api {
  // eslint-disable-next-line
  constructor(url) {
    super(url);
  }
}
