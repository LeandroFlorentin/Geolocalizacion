const express = require('express');
const app = require('./src/routes')
const cors = require('cors')
const morgan = require('morgan')

// initializations
const server = express();

//routes
server.use(cors())
server.use(morgan('dev'))
server.use('/', app)

server.listen(3001, () => {
    console.log("server on port 3001")
})