export class SessionDuration {
  constructor(data) {
    this._day = data.day;
    this._sessionLength = data.sessionLength;
  }

  get day() {
    return this._day;
  }
  get sessionLength() {
    return this._sessionLength;
  }
}
