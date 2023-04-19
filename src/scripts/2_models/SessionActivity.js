export class SessionActivity {
  constructor(data) {
    this._day = data.day;
    this._kilogram = data.kilogram;
    this._calories = data.calories;
  }

  get day() {
    return this._day;
  }
  get kilogram() {
    return this._kilogram;
  }
  get calories() {
    return this._calories;
  }
}
