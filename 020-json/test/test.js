const {toJson,toObject} = require('../src/app');
const {assert} = require('chai');

let personString;
let person;

describe('Json',()=>{

    /*
        "before" metodu, testlerin başlamadan önce yalnızca bir kez çalıştırılır ve genellikle aşağıdaki gibi senaryolar için kullanılır:
            - Veritabanı bağlantısı oluşturma
            - Sunucu başlatma
            -
    */
    before(()=>{
        personString = '{"name":"Mehmet","surname":"Demir","age":30}';
        person = {
            name:"Ahmet",
            surname:"Yilmaz",
            age:30
        }
    });

    it('Checking toObject',()=>{
        const obj = toObject(personString);

        assert.property(obj, 'name', 'Object should have a property named name');
        assert.equal(typeof obj.name,"string");
        assert.equal(typeof obj.surname,"string");
        assert.equal(typeof obj.age,"number");
        assert.equal(obj.name,"Mehmet");
        assert.equal(obj.surname,"Demir");
    });

    it('Checking toJson',()=>{
        const jsonString = toJson(person);
        assert.notEqual(jsonString,'{"name":"Ahmet","surname":"Yilmaz"}');
        assert.equal(jsonString,'{"name":"Ahmet","surname":"Yilmaz","age":30}');
    });
});