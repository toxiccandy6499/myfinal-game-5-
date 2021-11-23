

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var balls = [];
var Asteroid,AsteroidsGroup,AsteroidImg;
var player1;
var bg2;
var AsteroidSpritedata, AsteroidSpritesheet;
var brokenAsteroidAnimation = [];
var brokenAsteroidSpritedata, brokenAsteroidSpritesheet;
var invisibleBlockGroup, invisibleBlock;



function preload(){
  
  bg2 = loadImage("bg2.jpg");
  player1 = loadImage("player1.png");
  Asteroid = loadImage("Asteroid.png");
  AsteroidSpritedata = loadJSON("Asteroid.json");
  AsteroidSpritesheet = loadImage("Asteroid.png");
  brokenAsteroidSpritedata = loadJSON("brokenAsteroid.json");
  brokenAsteroidSpritedata = loadImage("brokenAsteroid.png");
  
 
}

function setup() {
  createCanvas(1200, 600);


  


  
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  ground = Bodies.rectangle(0,height - 1,width* 2 ,1 ,{ isStatic:true });
  World.add(world,ground);  

  AsteroidsGroup = new Group();

  spawnAsteroids()
}



function draw() 
{
  background(189);
  
  
  
image(bg2, 0, 0, width, height);
Engine.update(engine);
var options = {
  isStatic: true
};
}

function spawnAsteroids(){
  if (frameCount% 240 === 0 ){
    var Asteroid = createSprite(200,-50);
    Asteroid.scale = 0.5

    Asteroid.x = Math.round(random(200,400))

    Asteroid.addImage(AsteroidImg)

    Asteroid.velocityY = -2
    invisibleBlock.velocityY = 1


    AsteroidsGroup.add(Asteroid)

    invisibleBlockGroup.add(invisibleBlock)
      invisibleBlock.debug = true

  }
}



