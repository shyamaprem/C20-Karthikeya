var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 150);
  fixedRect = createSprite(400, 200, 150, 50);

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  movingRect.debug = true;
  fixedRect.debug = true;

  

}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }

  else{

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  drawSprites();
}