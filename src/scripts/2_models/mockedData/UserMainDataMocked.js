export class UserMainDataMocked {
  constructor(user) {
    this._id = user[0].id;
    this._firstName = user[0].userInfos.firstName;
    this._lastName = user[0].userInfos.lastName;
    this._age = user[0].userInfos.age;
    this._todayScore = user[0].todayScore;
    this._score = user[0].score;
    this._calorieCount = user[0].keyData.calorieCount;
    this._proteinCount = user[0].keyData.proteinCount;
    this._carbohydrateCount = user[0].keyData.carbohydrateCount;
    this._lipidCount = user[0].keyData.lipidCount;
  }

  get id() {
    return this._id;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get todayScore() {
    if (this._todayScore) {
      return this._todayScore;
    } else {
      return this._score;
    }
  }
  get calorieCount() {
    return this._calorieCount;
  }
  get proteinCount() {
    return this._proteinCount;
  }
  get carbohydrateCount() {
    return this._carbohydrateCount;
  }
  get lipidCount() {
    return this._lipidCount;
  }
}
