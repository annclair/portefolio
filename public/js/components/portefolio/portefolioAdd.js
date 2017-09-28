((app) => {
    'use strict'

    app.component("portefolioAdd", {
        templateUrl: 'js/components/portefolio/portefolioAdd.html',
        controller: ['portefoliosService', '$state', 'usersService', function (portefoliosService, $state, usersService) {
            angular.extend(this, {
                $onInit() {
                    this.getUser();
                },
                getUser() {
                    usersService.getCurrent().then((user) => {
                        this.user = user
                    })
                },
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