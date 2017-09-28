((app) => {
    'use strict'

    app.component("login", {
        templateUrl: 'js/components/login/login.html',
        controller: ['usersService', '$state', function (usersService, $state) {
            angular.extend(this, {
                connect(user) {
                    usersService.connect(user).then((user) => {
                        $state.go('app.home')
                    })
                }
            })
        }]
    })
})(require('angular').module('app.login'))