'use strict';

class Product {
    get Id(){
        return this.id;
    }

    set Id(id){
        this.id = id;
    }

    get Partnumber(){
        return this.partnumber;
    }

    set Partnumber(partnumber){
        this.partnumber = partnumber;
    }

    get Description(){
        return this.description;
    }

    set Description(description){
        this.description = description;
    }

    toString() {
        const output = {
            Id: this.Id,
            Partnumber: this.Partnumber,
            Description: this.Description
        }

        return JSON.stringify(output, null, 2);
    }
}

module.exports = Product;