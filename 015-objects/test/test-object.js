const {assert} = require("chai");
const {mint,burn} = require("../src/use-object");
const token = require("../src/token");

it("mint and burn functions work correctly",()=>{
    assert.equal(token.name,"Coinlegs");
    assert.equal(token.symbol,"LEGS");
    assert.equal(token.totalSupply,1000);

    mint(token,200);
    assert.equal(token.totalSupply,1200);
    burn(token,500);
    assert.equal(token.totalSupply,700);
});