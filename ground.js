class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 1
            
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var groundpos = this.body.position;
        push();
        translate(groundpos.x,groundpos.y);
        stroke("black");
        fill("brown");
        rectMode(CENTER);
        rect(groundpos.x,groundpos.y,this.width,this.height);
        pop();
    }
}