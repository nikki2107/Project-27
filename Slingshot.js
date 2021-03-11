class Slingshot{
    constructor(bodyA, bodyB){
         var options = {
            bodyA: bodyA,
            pointB: bodyB,
            length:300
        }
        this.pointB=bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(0);
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}

    


       
