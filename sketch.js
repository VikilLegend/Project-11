var path,pathImage;
function preload(){
  //pre-load images

pathImage = loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite(200,200);
path.addImage("path",pathImage);
path.velocityY=4;
path.scale=1.2;

}

function draw() {

}
