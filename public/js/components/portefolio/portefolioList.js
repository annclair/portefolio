((app) => {
    'use strict'

    app.component("portefolioList", {
        templateUrl: 'js/components/portefolio/portefolioList.html',
        controller: ['portefoliosService', '$state', function (portefoliosService, $state) {
            angular.extend(this, {
                $onInit() {
                    this.getAll();
                },
                getAll() {
                    portefoliosService.get().then((res) => {
                        this.portefolios = res.data
                    })
                },
                goCreateWebsite() {
                    $state.go('app.portefolioAdd')
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))
