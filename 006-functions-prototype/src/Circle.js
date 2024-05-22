const Shape = require('./Shape');

function Circle(x,y,radius){
    this.radius = radius;
    Shape.call(this,x,y);
}
Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;