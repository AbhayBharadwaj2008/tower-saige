const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var box;
var engine,world;
function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world; 
  box = new BaseClass(300, 100, 50, 50);
  
  ground1 = new Ground(650,300,200,20);
}

function draw() {
  background(50,50,50); 
  ground1.display(); 
  box.display();
  drawSprites();
  
}