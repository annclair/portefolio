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
                add(website) {
                    portefoliosService.add(website).then((res) => {
                        this.website = {};
                        $state.go('app.portefolioList')
                    })
                },
                cancel() {
                    $state.go('app.portefolioList')
                },
                submitForm(form, website) {
                    if (form.$valid) {
                        this.add(website);
                    }
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))