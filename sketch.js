const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var polygon,polygonImage;
var slingShot1;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18;

function preload(){
    polygonImage=loadImage("polygon.png")
}

function setup(){

    createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

    
    ground1=new Ground(600,height,1200,20);
    ground2=new Ground(100,50,200,20);
    ground3=new Ground(350,50,80,20); 
    // on first
    box1=new Box(100,50,30,40);
    box2=new Box(130,50,30,40);
    box3=new Box(160,50,30,40);
    box4=new Box(190,50,30,40);
    box5=new Box(210,50,30,40);
    box6=new Box(130,35,30,40);
    box7=new Box(160,35,30,40);
    box8=new Box(130,35,30,40);
    box9=new Box(290,20,30,40);
    // on second
    box10=new Box(330,235,30,40);
    box11=new Box(360,235,30,40);
    box12=new Box(390,235,30,40);
    box13=new Box(420,235,30,40);
    box14=new Box(450,235,30,40);
    box15=new Box(360,195,30,40);
    box16=new Box(390,195,30,40);
    box17=new Box(420,195,30,40);
    box18=new Box(390,155,30,40);

    polygon=Bodies.circle(50,200);
    
    slingShot1=new SlingShot(polygon,{x:200,y:200});
    Engine.run(engine);

}

function draw(){
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ImageMode(CENTER)
  Image(polygonImage,0,0);


  ground1.display();
  ground2.display();
  // on first
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  // on second
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  polygon.display();
  slingShot1.display();
   
  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot1.fly();
}

function keyPressesd(){
  
   if(keyCode==32){
    slingShot1.attach(polygon)
   }


}



