'use strict';

class Article {
    get Id(){
        return this.id;
    }

    set Id(id){
        this.id = id;
    }

    get Parent(){
        return this.parent;
    }

    set Parent(parent){
        this.parent = parent;
    }

    toString() {
        const output = {
            Id: this.Id,
            Parent: this.Parent
        }
        
        return JSON.stringify(output, null, 2);
    }
}

module.exports = Article;