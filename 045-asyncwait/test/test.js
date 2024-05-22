const Math = require('../src/math');
const {assert} = require('chai');

const math = new Math();

describe('testing async/wait',()=>{
    it('sum',async ()=>{
        var result = await math.Sum(2,4);
        assert.equal(result,6);
    });
});