((app) => {
    'use strict'

    app.component("portefolio", {
        templateUrl: 'js/components/portefolio/portefolio.html',
        controller: ['portefoliosService', '$state', function (portefoliosService, $state) {

            angular.extend(this, {
                $onInit() {
                    this.getAll();
                },

                getAll() {
                    portefoliosService.get().then((res) => {
                        this.portefolios = res.data
                    })
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))
