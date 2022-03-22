// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	api: 'http://localhost:8000/api',
	recaptcha_site_key: '6LfNs90eAAAAAPneVKPrVrXIqjFD9WV0xsqi6NNR',
	stripe_public_key: 'pk_test_51KfSaPCzfGR8PWZfdd5rw7yVhF83sfkSjiBWpL2cjTOQKPaCVXIiqEXvQUT7Wjgt1GKBGD6vGYdcKJQ5qCwj4ZvE00u3yh3aJq'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
