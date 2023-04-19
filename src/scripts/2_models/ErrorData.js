/**
 * error class if id not found in database return error 404
 */
export class SpecificError {
  constructor(name, message) {
    this._message = message;
    this._name = name;
  }
}
