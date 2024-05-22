
const array = [1,2,3,4,5];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

/*
    Array'in içindeki tüm elemanların 2 katı alınır ve array güncellenir
*/
function doubleArray(arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] = arr[index]*2;
    }
}

module.exports = doubleArray;
