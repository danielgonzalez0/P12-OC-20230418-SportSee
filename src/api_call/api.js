/**
 * return API url
 * @param {string} url: API url
 */
class Api {
  constructor(url) {
    this._url = url;
  }
async getData () {
    return (
axios.get(this_url)
    );
}

}
