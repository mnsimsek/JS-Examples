const Student = require('../src/Student');
const {SortAsc,SortIntDesc,SortStringAsc,SortStringDesc,SortStudents,WriteArrayWithIndex,AddScoreStudents} = require('../src/Array-Functions');

const {assert} = require('chai');

describe('Testign Arrays',()=>{
    it('sort integers ascending',()=>{
        const arr = [5,2,9,0,4];
        const sortedArr = SortAsc(arr);

        assert.equal(sortedArr[0],0);
        assert.equal(sortedArr[1],2);
        assert.equal(sortedArr[2],4);
        assert.equal(sortedArr[3],5);
        assert.equal(sortedArr[4],9);
    });

    it('sort integers descending',()=>{
        const arr = [5,2,9,0,4];
        const sortedArr = SortIntDesc(arr);

        assert.equal(sortedArr[0],9);
        assert.equal(sortedArr[1],5);
        assert.equal(sortedArr[2],4);
        assert.equal(sortedArr[3],2);
        assert.equal(sortedArr[4],0);
    });

    it('sort strings ascending',()=>{
        const arr = ['mehmet','ali','zeynep','ayse','fatma'];
        const sortedArr = SortStringAsc(arr);

        assert.equal(sortedArr[0],'ali');
        assert.equal(sortedArr[1],'ayse');
        assert.equal(sortedArr[2],'fatma');
        assert.equal(sortedArr[3],'mehmet');
        assert.equal(sortedArr[4],'zeynep');
    });

    it('sort strings descending',()=>{
        const arr = ['mehmet','ali','zeynep','ayse','fatma'];

        //WriteArrayWithIndex(arr);

        const sortedArr = SortStringDesc(arr);

        assert.equal(sortedArr[4],'ali');
        assert.equal(sortedArr[3],'ayse');
        assert.equal(sortedArr[2],'fatma');
        assert.equal(sortedArr[1],'mehmet');
        assert.equal(sortedArr[0],'zeynep');
    });

    it('sort students',()=>{
        
        const students = [new Student('ali',30),new Student('mehmet',10),new Student('zeynep',70),new Student('ayse',50),new Student('fatma',45)];
        const sortedArr = SortStudents(students);

        assert.equal(sortedArr[0].grade,10);
        assert.equal(sortedArr[1].grade,30);
        assert.equal(sortedArr[2].grade,45);
        assert.equal(sortedArr[3].grade,50);
        assert.equal(sortedArr[4].grade,70);
    });

    it('add 10 to all students',()=>{
        
        const students = [new Student('ali',30),new Student('mehmet',10),new Student('zeynep',70),new Student('ayse',50),new Student('fatma',45)];
        const newList = AddScoreStudents(students);

        assert.equal(newList[0].grade,40);
        assert.equal(newList[1].grade,20);
        assert.equal(newList[2].grade,80);
        assert.equal(newList[3].grade,60);
        assert.equal(newList[4].grade,55);
    });
});
