'use strict'
let mongoose = require('mongoose')

let userModel = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true,
        validate: 
            [(email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            }, 'Please use a valid email address']
    },
    name: {
        type: String
    },
    password: {
        type: String,
        require: true
    }
}, {
        timestamps: true
    }))

module.exports = userModel