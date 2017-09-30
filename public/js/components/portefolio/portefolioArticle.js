((app) => {
    'use strict'

    app.component("portefolioArticle", {
        templateUrl: 'js/components/portefolio/portefolioArticle.html',
        controller: ['portefoliosService', '$state', 'usersService', function (portefoliosService, $state, usersService) {
            angular.extend(this, {
                $onInit() {
                    this.getUser();
                    this.get($state.params.id);
                    this.modeEdit=false;
                },
                getUser() {
                    usersService.getCurrent().then((user) => {
                        this.user = user
                    })
                },
                get(selectedWebsiteId) {
                    portefoliosService.getById(selectedWebsiteId).then((res) => {
                        this.website = res.data
                    })
                },
                close() {
                    $state.go('app.portefolioList')
                },
                editWebsite(){
                    this.modeEdit = true;
                },
                cancel() {
                    this.modeEdit = false;
                },
                update(website) {
                    portefoliosService.update(website).then((res) => {
                        this.cancel();
                    })
                },
                delete(website) {
                    portefoliosService.delete(website).then((res) => {
                        this.close()
                    })
                },
                submitForm(form, website) {
                    if (form.$valid) {
                        this.update(website);
                    }
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))