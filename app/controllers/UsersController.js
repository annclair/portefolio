'use strict'
let jwt = require('jsonwebtoken')
let Controller = require('./Controller')
const USER = require('../models/user')
const ENV = require('../../config/env')

class UsersController extends Controller {

    constructor() {
        super(USER)
    }

    authenticate(req, res, next) {
        if (!req.body.email || !req.body.password) {
            res.status(400).send("Please enter your email and password")
        } else {
            USER.findOne(req.body, {
                password: 0
            }, (err, user) => {
                if (err)
                    next(err)
                else if (!user)
                    res.sendStatus(403)
                else {
                    let token = jwt.sign(user, ENV.token, {
                        expiresIn: "24h"
                    })

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    })
                }
            })
        }

    }
}

module.exports = UsersController