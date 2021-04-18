
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,200,300,350);
	ground = new Ground(400,300,400,20);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  text(mouseX +"," + mouseY,mouseX,mouseY);
  
  Engine.update(engine);

  
  tree.display();
  ground.display();
  

  drawSprites();
 
}



