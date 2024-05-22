/*
    chai'de promise ile function'ları test etmek için chai-as-promised paketini yükleyip
    chai.use(chaiAsPromised); 
    ile ilgili function'ları kullanır hale getiriyoruz
*/

const Math = require('../src/math');
const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
const assert = chai.assert;
chai.use(chaiAsPromised);

let a=10,b=5;
let math = new Math();

describe('testing promise',()=>{
    it('Sum',()=>{
        let result = math.Sum(a,b);
        assert.equal(result,15);
    });
    it('Substract',()=>{
        let result = math.Substract(a,b);
        assert.equal(result,5);
    });
    /*
        Burada bekleme işlemi uzun sürecektir. Senkron çalışmada bu süreyi beklemek zorundayız
        ama biz arka arkaya farklı metodları çağırmak ve sonuçları sonradan almak istersen nasıl yapmalıyız?
    */
    it('SumLong',()=>{
        let result = math.SumLong(a,b);
        assert.equal(result,15);
    });
    it('SubstractLong',()=>{
        let result = math.SubstractLong(a,b);
        assert.equal(result,5);
    });
});

/*
    PROMISE
    burada dönen değer bir Promise nesnesidir
*/
describe('Testing promises',()=>{
    it('it should return promise',()=>{
        const promise = math.SumLongPromise(a,b);
        assert.equal(promise instanceof Promise,true);
    });

    it('SumLongPromise',async ()=>{
        let promise = math.SumLongPromise(a,b);
        let result = await promise;

        //let result = await math.SumLongPromise(a,b);
        assert.equal(result,15);
    });

    it('DivideLongPromise',(done)=>{
        let promise = math.DivideLongPromise(a,b);
        promise.then((result)=>{
            // Burası aslında done() eklemez isek bir işe yaramıyor. done olmadan test edelim
            assert.equal(result,2);
            done();
        });
    });

    it('DivideLongPromiseWithError',(done)=>{
        /*
            Burada bölen olarak 0 gönderirsek, fonksiyonumuz exception fırlatacaktır. O zamanda aşağıda then içindeki
            done() çağrılmayacak ve bu test 10 sn bekleyip, başarısız olarak log düşecektir. Bu sebeple catch ile yakalamalıyız
        */
        let promise = math.DivideLongPromiseWithError(a,0);

        promise.then((result)=>{
            assert.equal(result,Infinity);
            done();
        }).catch((error)=>{
            assert.equal(error,'divider is zero');
            done();
        });
    });

    /*
        npm install --save-dev chai-as-promised
        Promise ile ilgili metodları kullanmak için bu paketi yüklemek gerekiyor
    */
    it('DivideLongPromiseWithError',()=>{
        let promise = math.DivideLongPromiseWithError(a,0);
        return assert.isRejected(promise);
    });

    /*
        reject değilde resolve çağrılıyorsa, hata yoktur, isFulfilled metoduyla kontrol sağlayabiliriz
    */
    it('DivideLongPromiseWithoutError',()=>{
        let promise = math.DivideLongPromiseWithError(a,2);
        return assert.isFulfilled(promise);
    });
});