((app) => {

    'use strict'
    app.service('portefoliosService', function ($http) {
        return {
            get() {
                return $http.get('/api/websites')
            },
            getById(websiteId) {
                return $http.get('/api/websites/' + websiteId)
            },
            add(website) {
                return $http.post('/api/websites', website)
            },
            update(website) {
                return $http.put('/api/websites/' + website._id, website)
            }
        }
    })

})(require('angular').module('app.services'))