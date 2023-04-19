import { MockedDataApi } from '../1_api/MockedDataApi';
import { SpecificError } from '../2_models/ErrorData';
import { UserActivityDataMocked } from '../2_models/mockedData/UserActivityDataMocked';

export class GetActivityDataFromDB {
  constructor(url, id, type) {
    switch (type) {
      case 'mocked':
        const data = new MockedDataApi(url)
        const result = data.getUserActivityDataMocked(id);
        return result
      case 'backend-server':
        return console.log('not implemented yet');
      default:
        const error = new SpecificError(
          'Erreur 400',
          'Appel requête HTTP: type de format inconnu'
        );
        return error;
    }
  }
}

export class UserDataActivity {
  constructor(data, type) {
    switch (type) {
      case 'mocked':
        return new UserActivityDataMocked(data);
      case 'backend-server':
        return console.log('not implemented yet');
      default:
        const error = new SpecificError(
          'Erreur Modelisation',
          'type de format de modelisation inconnu'
        );
        return error;
    }
  }
}