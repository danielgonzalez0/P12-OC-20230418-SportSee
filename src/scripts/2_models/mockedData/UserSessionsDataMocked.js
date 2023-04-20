import { SessionDuration } from '../SessionDuration';

export class UserSessionsDataMocked {
  constructor(user) {
    this._id = user[0].userId;
    this._sessions = user[0].sessions;
  }

  get id() {
    return this._id;
  }
  get sessions() {
    let arrayOfSessions = this._sessions.map(
      (session) => new SessionDuration(session)
    );
    return arrayOfSessions;
  }
}
