// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { config } from './common';

export const environment = Object.assign({
  production: false,
  baseUrl: 'http://localhost:8080/',
  RechercherSessionUrl: 'SessionsFiltres'
}, config);

