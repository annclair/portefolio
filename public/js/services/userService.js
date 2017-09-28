((app) => {
    'use strict'
    app.service('usersService', ['$http', '$cookies', '$window', '$q', class UsersService {

        constructor($http, $cookies, $window, $q) {
            this.$http = $http
            this.$cookies = $cookies
            this.$window = $window
            this.$q = $q
            this.currentUser = null
        }

        get() {
            return this.$http.get('/api/users')
        }

        connect(data) {
            return new Promise((resolve, reject) => {
                this.$http.post('/api/auth', data).then((res) => {
                    this.currentUser = res.data.user
                    this.$cookies.put('token', res.data.token)
                    resolve(res.data.user)
                }).catch(() => {
                    reject()
                })
            })
        }

        disconnect() {
            return new Promise((resolve, reject) => {
                this.$cookies.remove("token")
                this.currentUser = null
                resolve()
            })
        }

        getCurrent() {
            let deferred = this.$q.defer()
            if (!this.$cookies.get('token')) {
                deferred.reject()
            } else {
                if (!this.currentUser) {
                    let payload = this.$cookies.get('token').split('.')[1]
                    payload = this.$window.atob(payload)
                    payload = JSON.parse(payload)
                    this.currentUser = payload._doc
                    if (Math.round(new Date().getTime() / 1000) > payload.exp)
                        return this.disconnect()
                }
                deferred.resolve(this.currentUser)
            }
            return deferred.promise
        }

    }])
})(angular.module('app.services'))
