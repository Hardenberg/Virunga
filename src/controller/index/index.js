'use strict'

class IndexController{
    constructor() {
    }

    async indexAction(req, res){
        res.render('index', {});
    }
}

module.exports = IndexController