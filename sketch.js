const World=Matter.World;//const= constant; keeps the value constant
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,ground,pig1,log1;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

box1= new Box(700,370,70,70);

box2= new Box(920,370,70,70);
log1= new Log (810,250,25);
box3=new Box(700,200,70,70)
box4=new Box(920,200,70,70)
log2=new Log(810,140,25)
pig1= new Pig(810,370)
ground= new Ground (600,height,1200,20)

}

function draw() {
  background(0); 
  Engine.update(engine);
  
box1.display();
// box3.display();
// box4.display();
box2.display();
pig1.display();
ground.display();
log1.display();
log2.display();
box3.display();
box4.display();
  drawSprites();
}
//World=physical world in which add the objects
// Engine= creates physics engine
//Bodies= creates physical objects which inhabit(occupy) the world