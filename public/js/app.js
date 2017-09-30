((app) => {
    'use strict'
})(require('angular').module('app', [
  require('angular-ui-router'),
  require('angular-cookies'),
  require('angular-messages'),
  require('angular-materialize'),
  'app.home',
  'app.common',
  'app.portefolio',
  'app.login',
  'app.services',
  'app.config'
]))