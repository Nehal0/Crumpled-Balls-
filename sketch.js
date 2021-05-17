
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, body;
var bottom, rect2, rect3;
var paperObject;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,380,1200,10);
	bottom = new Dustbin(900,365,200,20);
  rect2 = new Dustbin(790,325,20,100);
	rect3 = new Dustbin(1009,325,20,100);
	paper = new Paper(200,325,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  ground.display();
  bottom.display();
  rect2.display();
  rect3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
    
  }
}