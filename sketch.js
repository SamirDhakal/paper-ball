var paper;
var ground;
var basket1, basket2, basket3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 630, 25, 25);
	ground = new Ground(400, 680, 800, 10);
	basket1 = new Basket(750, 625, 20, 100);
	basket2 = new Basket(640, 665, 200, 20);
	basket3 = new Basket(550, 625, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  basket1.display();
  basket2.display();
  basket3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1, y:-2.5});
	} 
}



