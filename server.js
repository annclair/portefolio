'use strict'

let http = require('http')
let express = require('express')
let app = exports.app = express()
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let morgan = require('morgan')
let cors = require('cors')
let routes = require('./app/routes')
const ENV = require('./config/env')

app.use(express.static(__dirname + '/public'))
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

app.use(methodOverride('X-HTTP-Method-Override'))

app.use(cors())

app.use('/api', routes())

let mongoose = require('mongoose')
mongoose.connect(ENV.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); // mettre lien fichier env.js

app.use((error, request, response, next) => {
    console.error(error.stack)
    response.status(500).send(error.message)
})

exports.startServer = (port, path, callback) => {
    let server = http.Server(app);
    server.listen(process.env.PORT || port, callback)
    console.log(`server listening on port ${port}`)

    process.on('SIGINT', function () {
        console.log("\nStopping...")
        process.exit()
    });
}