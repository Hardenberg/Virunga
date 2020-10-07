'use strict'

let IndexController = require('../../controller/index')

class HtmlRouter {
    constructor(app) {
        this.app = app;
        this.index = new IndexController();
    }

    route(){
        this.app('/', this.index.indexAction)
    }
}

module.exports = HtmlRouter;