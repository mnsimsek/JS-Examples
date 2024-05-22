const Shape = require('./Shape');

class Circle extends Shape{
    constructor(name,x,y,r){
        super(name,x,y);
        this.radius = r;
    }
}

module.exports = Circle;

