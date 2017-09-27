((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.portefolio', {
            url: '/portefolio',
            template: '<portefolio></portefolio>'
        })
    }])
})(require('angular').module('app.portefolio', []))
