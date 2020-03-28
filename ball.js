class Ball{
    constructor(x,y,radius){
    var options = {
       // 'restitution':0.8,
        'friction':0,
        'density':1,
        'inertia': Infinity
      
    }
    
  this.body=Bodies.circle(x, y, radius,options);  
  this.radius = radius;
  this.image=loadImage("metalBall.png")
  World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y)
    
    }

}