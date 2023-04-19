import axios from 'axios';
import { SpecificError } from '../2_models/ErrorData';

/**
 * return API url
 * @param {string} url: API url
 */
export class Api {
  constructor(url) {
    this._url = url;
  }
  async getData() {
    return axios
      .get(this._url)
      .then((res) => res.data)
      .catch((err) => {
        if (err.message === 'Request failed with status code 404') {
          const error = new SpecificError(
            'Erreur 404',
            'requête http a échoué: url non reconnu'
          );
          return error;
        } else {
          console.log(err);
        }
      });
  }
}
