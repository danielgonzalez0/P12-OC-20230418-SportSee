import { SessionActivity } from '../SessionActivity';

export class UserActivityDataMocked {
  constructor(user) {
    this._id = user[0].userId;
    this._sessions = user[0].sessions;
  }

  get id() {
    return this._id;
  }
  get sessions() {
    let arrayOfSessions = this._sessions.map(
      (session) => new SessionActivity(session)
    );
    return arrayOfSessions;
  }
}
