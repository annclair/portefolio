((app) => {
    'use strict'

    app.component("portefolioArticle", {
        templateUrl: 'js/components/portefolio/portefolioArticle.html',
        controller: ['portefoliosService', '$state', function (portefoliosService, $state) {
            angular.extend(this, {
                $onInit() {
                    this.get($state.params.id);
                },
                get(selectedWebsiteId) {
                    portefoliosService.getById(selectedWebsiteId).then((res) => {
                        this.portefolio = res.data
                    })
                },
                close() {
                    $state.go('app.portefolioList')
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))