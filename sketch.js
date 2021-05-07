const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,plane
var hammer,stone1,iron1,rubber1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
stone1=new Stone(800,400,50,50)
rubber1=new Rubber(200,50,60)
iron1=new Iron(500,50,70,80)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

stone1.display()
rubber1.display()
iron1.display()
    plane.display();
    hammer.display();

    
 
}