((app) => {
    'use strict'

    app.component("portefolioArticle", {
        templateUrl: 'js/components/portefolio/portefolioArticle.html',
        controller: ['portefoliosService', '$state', function (portefoliosService, $state) {
            angular.extend(this, {
                $onInit() {
                    this.get($state.params.id);
                    this.modeEdit=false;
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
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))