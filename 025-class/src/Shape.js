class Shape{
    constructor(name,x,y){
        this.name = name;
        this.x = x;
        this.y = y;
    }

    move(x,y){
        this.x+=x;
        this.y+=y;
    }
}

module.exports = Shape;