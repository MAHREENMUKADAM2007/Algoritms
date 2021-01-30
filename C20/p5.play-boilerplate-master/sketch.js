var fixedRect,  movingRect;
//var ob1 ,ob2,ob3,ob4;


function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY = 6;

  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityY = -6;

  /*ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = "green";

  ob2 = createSprite(200,100,30,30);
  ob2.shapeColor = "green";

  ob3 = createSprite(300,100,50,50);
  ob3.shapeColor = "green";

  ob4 = createSprite(400,100,50,50);
  ob4.shapeColor = "green";
  movingRect.debug=true;
  fixedRect.debug=true;
  */

  
}

function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

   bounceOff(movingRect,fixedRect); 

   

drawSprites();
    }

    





