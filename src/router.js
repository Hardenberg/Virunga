'use strict'

const HtmlRouter = require('./router/html');

class Router {
    constructor(app) {
        this.app = app;
    }

    route(){
        new HtmlRouter(this.app).route();

    }
}

module.exports = Router;