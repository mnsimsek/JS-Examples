const Shape = require('../src/Shape');
const Circle = require('../src/Circle');
const {assert} = require('chai');

describe('Shape',()=>{
    it('Creating Object',()=>{
        const shape = new Shape('shape1',10,20);

        assert.equal(shape.name,'shape1');
        assert.equal(shape.x,10);
        assert.equal(shape.y,20);
    });


    it('Moving Shape',()=>{
        const shape = new Shape('shape1',10,20);
        shape.move(1,2);
        assert.equal(shape.x,11);
        assert.equal(shape.y,22);

        shape.move(-1,-2);
        assert.equal(shape.x,10);
        assert.equal(shape.y,20);
    });

    it('Circle Tests',()=>{
        const circle = new Circle('circle1',10,20,5);
        circle.move(1,2);
        assert.equal(circle.name,'circle1');
        assert.equal(circle.x,11);
        assert.equal(circle.y,22);
        assert.equal(circle.radius,5);
    });
});