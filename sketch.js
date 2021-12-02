
var box;

function setup() {
  createCanvas(400, 400);
  box=createSprite(200,200,10,10)
}

function draw() {
  background("black");

if(keyDown("right")) {
box.x=box.x+1
}

if(keyDown("left")) {
  box.x=box.x-1
  }
  drawSprites();
}



