((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.portefolioList', {
            url: '/portefolio',
            template: '<portefolio-list></portefolio-list>'
        })
        .state('app.portefolioAdd', {
            url: '/portefolio/new',
            template: '<portefolio-add></portefolio-add>'
        })
        .state('app.portefolioArticle', {
            url: '/portefolio/:id',
            template: '<portefolio-article></portefolio-article>'
        })
    }])
})(require('angular').module('app.portefolio', []))