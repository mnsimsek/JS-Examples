const {runCallback,runCallbackTimeout,updateArray} = require('../src/app');
const {assert} = require('chai');

describe('Run callback',()=>{
    it('should run a function immediately',()=>{
        let called=false;

        runCallback(()=>{
            called=true;
        });
        assert(called,"callback function was not called");
    });

    it('should not run a function before 1 second',(done)=>{
        let called=false;
        runCallbackTimeout(()=>{
            called=true;
        });
        /*
            Burada, setTimeout içindeki function 500 ms sonra çalışacak. Bizim asıl runCallbackTimeout fonksiyonumuz ise
            yapacağı işi 1 sn sonra yapacağı için, bu testimizde called=false olmalı
        */
        setTimeout(()=>{
            assert(!called,"callback function was called before 500 ms");
            done();
        },500);
    });

    it('should run a function before 1.5 seconds',(done)=>{
        let called=false;
        runCallbackTimeout(()=>{
            called=true;
        });
        /*
            Burada assert ile kontrolümüzü 1.5 saniye sonra yapıyoruz, o zamana kadar asıl fonksiyon çalışacak ve
            called değeri true olacaktır
        */
        setTimeout(()=>{
            assert(called,"callback function was called before 1500 ms");
            done();
        },1500);
    });

    it('should double each element',()=>{
        const arr = [1,2,3,4,5];

        const newArr = updateArray(arr,(n)=>{
            return n*2;
        });

        assert.sameOrderedMembers(newArr,[2,4,6,8,10]);
    });

    it('should triple each element',()=>{
        const arr = [1,2,3,4,5];

        const newArr = updateArray(arr,(n)=>{
            return n*3;
        });

        assert.sameOrderedMembers(newArr,[3,6,9,12,15]);
    });
});
