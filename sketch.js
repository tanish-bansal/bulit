var bullet,wall,thicknes;
var speed,weight





function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(150,200,20,50);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  thicknes=random(22,83);
  wall=createSprite(1282,200,thicknes,height/2);

wall.shapeColor = "white"

  
}

function draw() {
  background("black"); 
  
 // bullet.velocityX=speed;

  if (hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thicknes * thicknes * thicknes);
  }
  if (damage>10)
  {
    wall.shapeColor="green";
  }
  if (damage<10)
  {
    wall.shapeColor="red";
  }
  
  drawSprites();
}
function hascollided(lbullet,lwall)
{
   bulletrightedge=lbullet.x+lbullet.width;
  wallleftedge=lwall.x;
  if (bulletrightedge>=wallleftedge){
    return true;
  }

  
  return false;

}