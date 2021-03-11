
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var slingshot, slingshot2, slingshot3, slingshot4, slingshot5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob = new Circle(220,565,80,80)
	bob2 = new Circle(290,565,80,80)
	bob3 = new Circle(370,565,80,80)
	bob4 = new Circle(450,565,80,80)
	bob5 = new Circle(530,565,80,80)
    roof = new Roof(180,150,410,40)
    slingshot = new Slingshot(bob.body,{x:220, y:300})
    slingshot2 = new Slingshot(bob2.body,{x:290, y:300})
    slingshot3 = new Slingshot(bob3.body,{x:370, y:300})
    slingshot4 = new Slingshot(bob4.body,{x:450, y:300})
    slingshot5 = new Slingshot(bob5.body,{x:530, y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180,150);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 slingshot.display();
 slingshot2.display();
 slingshot3.display();
 slingshot4.display();
 slingshot5.display();
  drawSprites();
 
}



function keyPressed() { 
  if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(bob.body,bob.body.position,{x:-150,y:-45}); } }


