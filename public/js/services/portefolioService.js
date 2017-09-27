((app) => {

    'use strict'
    app.service('portefoliosService', function ($http) {
        return {
            get() {
                return $http.get('/api/websites')
            }
        }
    })

})(require('angular').module('app.services'))