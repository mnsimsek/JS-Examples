
const {assert} = require('chai');
const {getPow,divide,isEven,factorial,smaller,add,addEquation,checkNumber} = require('../src/app');

describe('Testing Functions',()=>{
    it('pow - positive number',()=>{
        assert.equal(getPow(2,2),4);
        assert.equal(getPow(0,5),0);
        assert.equal(getPow(1,10),1);
        assert.equal(getPow(10,2),100);
    });

    it('pow - negative number',()=>{
        assert.equal(getPow(-2,2),4);
        assert.equal(getPow(-2,5),-32);
        assert.equal(getPow(-1,10),1);
    });

    it('divide',()=>{
        assert.equal(divide(-2,2),-1);
        assert.equal(divide(5,2),2.5);
        assert.equal(divide(10,2),5);
        //assert.equal(divide(10,0),Infinity);
        assert.throws(()=>{
            divide(10,0);
        },Error);
    });

    it('isEven',()=>{
        assert.equal(isEven(0),true);
        assert.equal(isEven(1),false);
        assert.equal(isEven(100),true);
    });

    it('factorial',()=>{
        assert.equal(factorial(0),1);
        assert.equal(factorial(1),1);
        assert.equal(factorial(2),2);
        assert.equal(factorial(5),120);
        assert.throws(()=>{
            factorial(-5);
        },Error);
    });

    it('smaller',()=>{
        assert.equal(smaller(3,5),3);
        assert.equal(smaller(-50,20),-50);
        assert.equal(smaller(20,5),5);
    });

    it('add',()=>{
        assert.equal(add(1,4),5);
        assert.equal(add(6,8),14);
    });

    it('addEquation',()=>{
        assert.equal(addEquation(1,4),'1+4=5');
        assert.equal(addEquation(7,0),'7+0=7');
    });
    
    it('checkNumber',()=>{
        assert.equal(checkNumber(175),'positive');
        assert.equal(checkNumber(-56),'negative');
        assert.equal(checkNumber(0),'zero');
    });
});