'use strict'
let CommentsController = require('../controllers/CommentsController')

module.exports = (app) => {

    let ctrl = new CommentsController()

    app.get('/comments', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.post('/comments', (req, res, next) => {
        return ctrl.create(req, res, next)
    })
}