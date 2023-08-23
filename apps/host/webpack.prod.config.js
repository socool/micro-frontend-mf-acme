const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   */
  remotes: [
    ['shop', 'https://localhost:3000/shop'],
    ['cart', 'https://localhost:3000/cart'],
    ['about', 'https://localhost:3000/about'],
  ],
});
