((app) => {

    'use strict'
    app.service('portefoliosService', function ($http) {
        return {
            get() {
                return $http.get('/api/websites')
            },
            add(website) {
                return $http.post('/api/websites', website)
            }
        }
    })

})(require('angular').module('app.services'))