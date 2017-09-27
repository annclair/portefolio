((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.portefolioList', {
            url: '/portefolio',
            template: '<portefolio-list></portefolio-list>'
        })
        .state('app.portefolioAdd', {
            url: '/new',
            template: '<portefolio-add></portefolio-add>'
        })
    }])
})(require('angular').module('app.portefolio', []))
