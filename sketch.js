var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random (22,83)
  bullet = createSprite(50,250,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  
  
  speed = random (223,321)
  bullet.velocityX= speed;
  bullet.shapeColor="white"

  weight = random (30,52)
 

  wall.shapeColor = color(80,80,80)
  
}





function draw() {
  background("black"); 

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation = 0.5 *weight *speed *speed/22500
    if(deformation>180)
    {
      bullet.shapeColor = color(250,0,0);
    }
    if(deformation<180 && deformation<100)
    {
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}


function hascollided(Lbullet,Lwall)
  {
    bulletRightEdge =lbullet.x + bullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge)
    {
      return true
    }
    return false;
  }

if(hascollided(bullet,wall))
{
  bullet.velocityx = 0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness );

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
 if(damage<10)
 {
   wall.shapeColor=Color(0,255,0)
 }
}
 