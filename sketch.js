var bullet, wall;
var bullet2;
var speed, weight;
var speed2, weight2;


function setup() {
  createCanvas(1600,400);

  speed =random(223, 321)
  weight = random(30, 52)

  speed2 =random(223, 321)
  weight2 = random(30, 52)

  
  thickness = random(22, 83)
  thickness2 = random(22, 83)

  bullet = createSprite(50, 80, 60, 20);
  bullet2 = createSprite(50,280, 60, 20);
  
  bullet.shapeColor = "white";
  bullet2.shapeColor = "white";
  


  wall = createSprite(1200, 100, thickness, height/2);
 
  wall2 = createSprite(1200, 300, thickness2, height/2)

  bullet.velocityX = speed;
  bullet2.velocityX = speed2;
 
}
function draw() {
  background(0);  

  

 // bullet.collide(wall);
  //bullet2.collide(wall);
 // bullet3.collide(wall);
//wall.x-bullet.x<(wall.width+bullet.width)/2


  if(hascollided(bullet, wall)){
bullet.velocityX=0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){
  wall.shapeColor= color(255, 0, 0);
  
}
else
if(damage<10){
  wall.shapeColor= color(0, 255,0);
  
}

  }



  if(hascollided(bullet2, wall2)){
    bullet2.velocityX=0;
       var damage2 = 0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)
    
    if(damage2>10){
      wall2.shapeColor= color(255, 0, 0);
    }
    
    if(damage2<10){
      wall2.shapeColor= color(0, 255, 0);
    }
    
      }



      text("WALL1", 1100, 100);
      text("WALL2", 1100, 300)
     
  drawSprites();
}


function hascollided(nbullet, nwall){
  bulletrightedge = nbullet.x+nbullet.width
  wallleftedge = nwall.x;
  if(bulletrightedge>=wallleftedge){
    return true;
  }
  
    return false;
  
}


