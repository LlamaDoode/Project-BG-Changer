var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,100,50,100) ;
  box.shapeColor="blue" ;
}

function draw() 
{
  background("red") ;

  if (keyDown(RIGHT_ARROW)) {
    //box.x = box.x+1 ;
    background("yellow") ;
  }

  if (keyDown(LEFT_ARROW)) {
    //box.x = box.x-1 ;
    background("green") ;
  }

  if (keyDown(UP_ARROW)) {
    //box.y = box.y-1 ;
    background("cyan") ;
  }

  if (keyDown(DOWN_ARROW)) {
    //box.y = box.y+1 ;
    background("magenta") ;
  }
  drawSprites() ;
}




