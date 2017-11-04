((app) => {

    'use strict'
    app.service('commentsService', function ($http) {
        return {
            get() {
                return $http.get('/api/comments')
            },
            add(comment) {
                return $http.post('/api/comments', comment)
            },
            delete(comment) {
                return $http.delete('/api/comments/' + comment._id)
            }
        }
    })

})(require('angular').module('app.services'))