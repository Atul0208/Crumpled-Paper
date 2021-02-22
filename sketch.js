
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;


function setup() {
	createCanvas( 2700,1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
downDustbin=new D(750+1800-100,960+200+50-39,279,26)
lDustbin=new D(600+1800-100,847+200+50-39+2,26,250)
rDustbin=new D(899+1800-100,847+200+50-39+2-127,26,250+257)
ed=new D(2685,700-30,70,20)
g=new Ground(1500,1192,3000,15)
paper=new Paper(200,1188,34)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine)
  background(0);
  lDustbin.display();
  g.display();
  downDustbin.display();
  lDustbin.display();
  rDustbin.display();
  ed.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:33,y:-16})
  }
}



