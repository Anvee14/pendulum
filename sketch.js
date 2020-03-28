const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum,ball,bar;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(400,100,3)
  bar = new Bar(400,100,150,20)
  pendulum = new Pendulum(ball.body,bar.body)
  console.log(ball.body)
}

function draw() {
  background(230,175,55);
  textAlign(CENTER)
  fill("black");
  textSize(17)
  text("DRAG THE MOUSE TO OSCILLATE THE BALL",400,30)
    
   
  Engine.update(engine);
  ball.display();
  pendulum.display();
  bar.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}