
function toJson(obj){
    return JSON.stringify(obj);
}
function toObject(json){
    return JSON.parse(json);
}

module.exports = {toJson,toObject};
