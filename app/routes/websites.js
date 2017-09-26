'use strict'
let WebsitesController = require('../controllers/WebsitesController')

module.exports = (app) => {

    let ctrl = new WebsitesController()

    app.get('/websites', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/websites/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/websites', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/websites/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/websites/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}
