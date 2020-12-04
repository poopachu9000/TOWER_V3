const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var wallHeight = 300;
var divisions=[];

function setup() {
  createCanvas(800,400);
  divisions = new Array;
}

function draw() {
  background(255,255,255); 
  for(var k = 0;k<=width;k=k+80) {
divisions.push(new Wall(k,height-wallHeight/2,10,wallHeight));
  }
  
  drawSprites();
}