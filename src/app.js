'use strict';

const express = require('express')
const app = express()

const configs = require('./configs/app');

const Router = require('./router')

app.set('view engine', 'pug');

new Router().route();

app.listen(configs.PORT, () => {
    console.log(`Example app listening at http://localhost:${configs.PORT}`)
})