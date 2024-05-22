function getPow(num, i) {
    const a = Math.pow(num, i);
    return a;
}
function divide(num1, num2) {
    if(num2==0)
        throw new Error('second number should not be 0');
    return num1 / num2;
}
function isEven(num) {
    return num % 2 == 0;
}
function factorial(num){
    if(num<0)
        throw new Error('Factorial for negative nuöber does not exists');

    var result=1;
    for(var i=1;i<=num;i++){
        result *= i;
    }
    return result;
}
function smaller(num1,num2){
    return num1 < num2 ? num1 : num2;
}
function add(num1,num2){
    return num1+num2;
}
/*
    a=5, b=7 ise dönen değer "5+7=12" olmalı
*/
function addEquation(num1,num2){
    return `${num1}+${num2}=${add(num1,num2)}`;
}
function checkNumber(num){
    if(num==0)
        return 'zero';
    else if(num > 0)
        return 'positive';
    else
        return 'negative';
}

module.exports = { getPow, divide, isEven,factorial,smaller,add,addEquation,checkNumber};