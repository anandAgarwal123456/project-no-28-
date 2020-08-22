
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var world,engine;
var groundFloor;
var treePlant;
var boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stoneObj;
var rope;


function setup() {
	createCanvas(1400, 800);

  

	engine = Engine.create();
	world = engine.world;

	groundFloor= new Ground(width/2,680,1400,20);
	treePlant= new Tree(900,80,400,600);

	boyImage= new Boy(400,480,150,250);

  mango1= new Mango(1120,300,40,50);
  mango2= new Mango(1000,300,40,50);
  mango3= new Mango(1200,275,40,60);
  mango4= new Mango(1060,330,35,55);
  mango5= new Mango(1170,200,45,55);
  mango6= new Mango(1050,220,45,60);
  mango7= new Mango(1110,160,40,60);
  mango8= new Mango(1110,235,40,60);
  mango9= new Mango(1245,300,45,55);

  stoneObj= new Stone(440,550,50,30);

  rope= new Sling(boyImage.body,{x:400,y:480});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  groundFloor.display();

  treePlant.display();
  boyImage.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  stoneObj.display();

  rope.display();

  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
  rope.fly();
}

function keyPressed() {
  if(keyCode===32) {
  Matter.Body.setPosition(stoneObj.body, {x:440, y:550});
  rope.attach(stoneObj.body);
  }
}




