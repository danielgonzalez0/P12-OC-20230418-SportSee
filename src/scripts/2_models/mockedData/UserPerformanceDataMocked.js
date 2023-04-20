import { PerformanceData } from '../PerformanceData';

export class UserPerformanceDataMocked {
  constructor(user) {
    this._id = user[0].userId;
    this._kind = user[0].kind;
    this._data = user[0].data;
  }

  get id() {
    return this._id;
  }

  get kind() {
    return this._kind;
  }

  get data() {
    let arrayOfDatas = this._data.map((element) => {
      const data = new PerformanceData(element);
      switch (data.kind) {
        case 1:
          return { value: data.value, kind: this._kind[1] };
        case 2:
          return { value: data.value, kind: this._kind[2] };
        case 3:
          return { value: data.value, kind: this._kind[3] };
        case 4:
          return { value: data.value, kind: this._kind[4] };
        case 5:
          return { value: data.value, kind: this._kind[5] };
        case 6:
          return { value: data.value, kind: this._kind[6] };
        default:
          return { data };
      }
    });
    return arrayOfDatas;
  }
}
