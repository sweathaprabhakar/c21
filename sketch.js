var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
 fixedrect =  createSprite(200, 200, 50, 80);
 fixedrect.shapeColor = "yellow";
 fixedrect.debug = true;
 movingrect = createSprite(400,200,80,30);
 movingrect.shapeColor = "yellow";
movingrect.debug = true;
}

function draw() {
  background("black");  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x<fixedrect.width/2 + movingrect.width/2){
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  else{
    fixedrect.shapeColor = "yellow";
    movingrect.shapeColor = "yellow";
  }
  drawSprites();
}