((app) => {
    'use strict'
})(require('angular').module('app', [
  require('angular-ui-router'),
  require('angular-cookies'),
  require('angular-materialize'),
  'app.home',
  'app.portefolio',
  'app.login',
  'app.services',
  'app.config'
]))