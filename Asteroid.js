class Asteroid{
    constructor(x,y)
 {
     var options = {
        isStatic: true
     };
    this.animation = AsteroidAnimation;
    this.image = loadImage = loadImage("Asteroid.png");
    this.r = 25;
    this.speed = 0.07;
    this.body = Bodies.circle(x,y,this.r,option);
    this.animation = [this.image];
    World.add(world.this.body)
   }
    
    
    remove(index){

        setTimeout(()=> {
            Matter.World.remove(world,this.body);
            delete balls[index];

        },1000 );
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
    translate(pos.x , pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, 0, this.r, this.r); 
    pop();
        
    }

    
}