function mint(token,amount){
    token.totalSupply += amount;
}
function burn(token,amount){
    token.totalSupply -= amount;
}

module.exports = {mint,burn};