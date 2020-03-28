class Pendulum{
  constructor(bodyA,bodyB){
    var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.5,
        length:200
    }
    this.string = Constraint.create(options);
    World.add(world, this.string);
  }
  display(){
var pointA = this.string.bodyA.position
var pointB = this.string.bodyB.position;
push()
stroke(0)
strokeWeight(3)
line(pointA.x,pointA.y-15,pointB.x,pointB.y)
pop()


  }
}