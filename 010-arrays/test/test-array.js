const {assert} = require('chai');
const doubleArray = require('../src/use-array');

describe('Checking Array Functions',()=>{
    it('doubleArray',()=>{
        const array = [1,2,3,4,5];
        doubleArray(array);
        assert.deepEqual(array,[2,4,6,8,10]);
        /*
            equal-deepEqual
            ---------------
            İki nesnesin eşit olup olmadığını kontrol ederken, deepEqual, içindeki değerlerin birbirine eşit olup olmadığını kontrol eder
        */
    });
});