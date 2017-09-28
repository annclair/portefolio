((app) => {
    'use strict'

    app.component("portefolioList", {
        templateUrl: 'js/components/portefolio/portefolioList.html',
        controller: ['portefoliosService', '$state', 'usersService', function (portefoliosService, $state, usersService) {
            angular.extend(this, {
                $onInit() {
                    this.getUser();
                    this.getAll();
                },
                getUser() {
                    usersService.getCurrent().then((user) => {
                        this.user = user
                    })
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