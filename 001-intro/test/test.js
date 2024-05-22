/*

    Packages
    ---------------
    Testleri yapabilmek için chai ve mocha paketlerine ihtiyacımız var
    > npm install --save-dev chai
    > npm install --save-dev mocha

    --save-dev dememizin sebebi sadece development sırasında bu paketleri kullanıyor olmamız


    test/test.js
    ---------------
    Bu dosya testleri çalıştırdığımız dosya
    > npm run test
    Bu komutlar ana dizinde bulunan package.json dosyasındaki scripts bölümünde test komutunu arar. Orayı açtığınızda 
    "test": "mocha test/*.js"
    bu ayarı göreceksiniz. Burada test isimli komut şu komutu işletecektir
    > mocha test/*.js
    Yani test klasörü altındaki tüm js dosyalarını çalıştır demektir. Bu örneğimizde de bir tane js dosyası olduğu için test.js dosyası yani
    bu dosya işletilecektir.

    Bu dosyada chai paketi kullanılıyor. assert, bu paketten gelmektedir. describe(...) ve it(...) komutu mocha paketinindir.

    app.js dosyası içinden export ile dışarıya aktarılan değişkenleri kullanmak için require('../app.js') ile dosyası burada ekliyoruz

*/

const { assert } = require('chai');
const { a, b, sum } = require('../app.js');

/*
    describe    : Yaptığımız testleri gruplamak için kullanıyoruz
    it          : Her bir testi bunun içinde gerçekleştiriyoruz
*/
describe('Checking Variables',()=>{
    it('a should be 5', () => {
        assert.equal(a,5);
    });
    it('b should be 6', () => {
        assert.equal(b,6);
    });
    it('a,b and sum should be positive', () => {
        assert.isAbove(a,0);
        assert.isAbove(b,0);
        assert.isAbove(sum,0);
    });
});

describe('Checking the Results',()=>{
    it('Sum should be 11', () => {
        assert.equal(a,5);
        assert.equal(b,6);
        assert.equal(sum,11);
    });
    it('Sum should not be 10', () => {
        assert.equal(a,5);
        assert.equal(b,6);
        assert.notEqual(sum,10);
    });
});