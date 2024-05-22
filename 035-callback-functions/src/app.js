// Burada hiç beklemeden fn() fonksiyonunu çağıracak
function runCallback(fn) {
    fn();
}

// Burada 1sn bekledikten sonra fn() fonksiyonunu çağıracak
function runCallbackTimeout(fn) {
    setTimeout(fn, 1000);
}

/*
    Burada array'in her bir elemanını update etmek istiyoruz ama nasıl update edeceğimizi parametre
    olarak vermek istiyoruz. Parametere olarak function alıyoruz ve o function arrayin elemanlarını güncelliyor
*/
function updateArray(arr,fn){
    arr.forEach((item,i) => {
        arr[i] = fn(item);
    });
    return arr;
}

runCallback(() => {
    console.log('Hello world');
});



module.exports = { runCallback, runCallbackTimeout,updateArray };