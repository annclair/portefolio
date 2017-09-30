((app) => {
    'use strict'
    app.component('navBar', {
        templateUrl: 'js/components/common/navBar.html',
        controller: ['$state', 'usersService', function ($state, usersService) {

            angular.extend(this, {
                $onInit() {
                    this.getUser();
                },
                getUser() {
                    usersService.getCurrent().then((user) => {
                        this.user = user
                    })
                },
                disconnect() {
                    usersService.disconnect().then((user) => {
                        this.user = null
                        $state.reload()
                    })
                }
            })
        }]
    })
})(require('angular').module('app.common'))
