const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    var op = {
        restitution:2
    }
   object= Bodies.rectangle(200,50,200,20,op);
    World.add(world,object);

   ground = Bodies.rectangle(200,380,400,20,object_options);
    World.add(world,ground);

   object2 = Bodies.rectangle(100,50,20,20,op)
    World.add(world,object2);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,200,20);
    rect(ground.position.x,ground.position.y,400,20);
    rect(object2.position.x,object2.position.y,20,20);
}
