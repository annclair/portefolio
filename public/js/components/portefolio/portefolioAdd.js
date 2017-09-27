((app) => {
    'use strict'

    app.component("portefolioAdd", {
        templateUrl: 'js/components/portefolio/portefolioAdd.html',
        controller: ['portefoliosService', '$state', function (portefoliosService, $state) {
            angular.extend(this, {
                add() {
                    portefoliosService.add(this.portefolio).then((res) => {
                        this.portefolio = {};
                        $state.go('app.portefolioList')
                    })
                },
                cancel() {
                    $state.go('app.portefolioList')
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))