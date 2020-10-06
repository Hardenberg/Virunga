'use strict';

const express = require('express')
const app = express()
const port = 3000

const Router = require('./router')

app.set('view engine', 'pug');

new Router().route();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})