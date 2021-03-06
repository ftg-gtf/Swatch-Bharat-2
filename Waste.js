class Waste{
    constructor(x, y, width, height){
    var options ={
        restitution: 0.1,
        isStatic: false,
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
   display(){
        var where = this.body.position;
        var angle = this.body.angle;
        push();
        translate(where.x, where.y);
	rectMode(CENTER);
        rotate(angle);
        strokeWeight(5);
        stroke("red");
	fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }

};
