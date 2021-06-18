//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body =  Matter.Body;
//creating variables for pendulum
var engine;
var world;
var ball;
var ground;
var con;
var ball2;
var con2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  //giving ball properties
  var ball_options = {
    restitution: 0.8
  }
  //creating ball
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  //creating ball2
  ball2= Bodies.circle(350,10,12,ball_options);
  World.add(world,ball2);
  //creating constraint between point and ball
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      //creating constraint2 between ball and ball
      con2 = Matter.Constraint.create({
        bodyA:ball,
        pointA:{x:0,y:0},
        bodyB:ball2,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con2);
  //position 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  //giving positions of ball
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,12);
  
  //giving line function
  push();
  strokeWeight(2);
  stroke("blue");
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  
  pop();
  
}

function keyPressed()
{//creating force for pendulum movement
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}









