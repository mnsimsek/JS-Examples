/*
    a ve b adında iki değişken tanımlanıp, toplamı sum değişkeninde tutulur.
*/
var a = 5;
var b = 6;
var sum = 11;

/*
    Diğer js dosyalarında kullanılması için module.export ile dışa aktarıyoruz.  
    Diğer dosyalarda bunu kullanmak için require(..) komutunu kullanıyoruz
*/
module.exports = {
    a,b,sum
}