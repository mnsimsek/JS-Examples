function SortAsc(arr){
    return arr.sort();
}
function SortIntDesc(arr){
    return arr.sort(function comparision(a,b){
        if(a<b)
            return 1;
        if(b<a)
            return -1;
        return 0;
    });
}
function SortStringAsc(arr){
    return arr.sort(function comparision(a,b){
        return a.localeCompare(b);
    });
}
function SortStringDesc(arr){
    return arr.sort(function comparision(a,b){
        return b.localeCompare(a);
    });
}

function SortStudents(arr){
    return arr.sort(function comparision(a,b){
        if(a.grade<b.grade)
            return -1;
        else if(a.grade>b.grade)
            return 1;
        return 0;
    });
}

function WriteArrayWithIndex(arr){
    arr.map((item,i)=>{
        console.log(`${i} : ${item}`);
    });
}

function AddScoreStudents(arr){
    return arr.map((item,i)=>{
        item.grade+=10;
        return item;
    })
}

module.exports = {SortAsc,SortIntDesc,SortStringAsc,SortStringDesc,SortStudents,WriteArrayWithIndex,AddScoreStudents};