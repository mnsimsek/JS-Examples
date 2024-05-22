const {assert} = require('chai');
const Shape = require('../src/Shape');
const Circle = require('../src/Circle');

describe('Shape',()=>{
    it('Shape should be function',()=>{
        assert.equal(typeof Shape,'function');
    });

    let shape;
    let x = 10;
    let y = 15;
    describe('Check instance',()=>{
        before(()=>{
            shape = new Shape(x,y);
        });

        it('Checking position property', () => {
            assert(shape.position, "not exists 'position' on the Shape instance");
            assert.equal(typeof shape.position, "object");
        });

        it('Set coordinates', () => {
            assert.equal(shape.position.x, x);
            assert.equal(shape.position.y, y);
        });

        it('Check move function', () => {
            shape.move(4,3);
            assert.equal(shape.position.x, x+4);
            assert.equal(shape.position.y, y+3);
        });

        it('Check circle', () => {
           let circle = new Circle(x,y,5);
           assert.equal(circle.position.x, x);
           assert.equal(circle.position.y, y);

           circle.move(1,1);
           assert.equal(circle.position.x, x+1);
           assert.equal(circle.position.y, y+1);
        });
    });
});