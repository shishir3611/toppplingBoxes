//nameSpacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(300,150,50,50);
  box2 = new Box(284,100,50,50);

  ground = new Ground(200,390,400,20);  
}

function draw() {
  background(0);
  Engine.update(engine);
 
  box1.display();
  box2.display();

  ground.display();
}