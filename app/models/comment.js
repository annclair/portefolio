'use strict'
let mongoose = require('mongoose')

let commentModel = mongoose.model('Comment', new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    websiteId: {
        type : String,
        // require : true
    },
    content: {
        type: String,
        require: true
    }
}, {
        timestamps: true
    }))

module.exports = commentModel