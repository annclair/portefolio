'use strict'

let mongoose = require('mongoose')

let websiteModel = mongoose.model('Website', new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    clientPresentation: {
        type: String
    },
    projectDescription: {
        type: String
    },
    technicalDescription: {
        type: String
    },
    url: {
        type: String
    },
    git: {
        type: String
    },
    image: {
        type: String
    }
}, {
        timestamps: true
    }))

module.exports = websiteModel