'use strict'
let jwt = require('jsonwebtoken')
const USER = require('../models/user')
const ENV = require('../../config/env')

module.exports = {

    isAuthenticate(req, res, next) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, ENV.token, (err, decoded) => {
                if (err && !decoded) {
                    next(err)
                } else {
                    next()
                }
            })
        } else {
            res.sendStatus(401)
        }
    }
}