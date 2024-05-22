const {setAge,setAgeTimeoutIncorrect,setAgeTimeoutThat,setAgeTimeoutArrow,setAgeTimeoutBind} = require('../src/person-functions');
const {assert} = require('chai');

describe('unbound functions',()=>{

    it('setAge',()=>{
        const person = { name: 'Ahmet', age: 20 };
        setAge.call(person);
        assert.equal(person.age,40);
    });

    it('setAgeTimeoutIncorrect',(done)=>{
        const person = { name: 'Ahmet', age: 20 };
        setAgeTimeoutIncorrect.call(person);
        
        setTimeout(()=>{
            assert.notEqual(person.age,40);
            done();
        },2000);
    });

    /*
        Burada done kullanılmaz ise, setTimeout,3 sn sonra assert.equal çalıştıracak ama ona gelmeden test zaten başarıyla geçmiş olacak ve biz 
        doğru bir test yapamamış olacağız. ama it metodu done'ı gönderirsek, it'in tamamlanması için done()'ın çağrılması gerekiyor.

        setAgeTimeoutThat function'ı içinde 1 sn beklediğimiz için, age'in değişip değişmediği doğru kontrol etmek için örneğin 3 sn bekleyip sonrasında
        assert.equal çalıştırıyoruz. Bu durumda da hata alacağız. Çünkü mocha'da bir test için belirlenen timeout süresi varsayılan 2sn. Bunu da arttırmamız
        gerekir. Bunun için package.json-> test içindeki komuta 
        --timeout 10000
        gibi bir parametre ekliyoruz. Yani metod 10sn sürebilir demek
    */
    it('setAgeTimeoutThat',(done)=>{
        const person = { name: 'Ahmet', age: 20 };
        setAgeTimeoutThat.call(person);
        setTimeout(()=>{
            assert.equal(person.age,40);
            done();
        },3000);
    });

    it('setAgeTimeoutArrow',(done)=>{
        const person = { name: 'Ahmet', age: 20 };
        setAgeTimeoutArrow.call(person);
        setTimeout(()=>{
            assert.equal(person.age,40);
            done();
        },3000);
    });

    it('setAgeTimeoutBind',(done)=>{
        const person = { name: 'Ahmet', age: 20 };
        setAgeTimeoutBind.call(person);
        setTimeout(()=>{
            assert.equal(person.age,40);
            done();
        },3000);
    });
});