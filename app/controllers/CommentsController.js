'use strict'
let Controller = require('./Controller')
const COMMENT = require('../models/comment')

class CommentsController extends Controller {

    constructor() {
        super(COMMENT)
    }

}

module.exports = CommentsController