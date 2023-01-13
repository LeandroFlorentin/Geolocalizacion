const express = require('express');
const engine = require('ejs-mate')
const path = require('path')

//conexiones
const app = express()


//routes
app.get('/', (req, res) => {
    res.status(200).json("funcionando32423432")
})

module.exports = app;