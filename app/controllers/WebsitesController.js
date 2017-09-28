'use strict'
let Controller = require('./Controller')
const WEBSITE = require('../models/website')

class WebsitesController extends Controller {

    constructor() {
        super(WEBSITE)
    }
}

module.exports = WebsitesController