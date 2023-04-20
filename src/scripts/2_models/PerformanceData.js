export class PerformanceData {
  constructor(data) {
    this._value = data.value;
    this._kind = data.kind;
  }

  get value() {
    return this._value;
  }
  get kind() {
    return this._kind;
  }
}
