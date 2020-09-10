var car,wall;
var speed, weight;



function setup() {
  createCanvas(1200,400);

  car1=createSprite(50,100,50,30);
  car2=createSprite(50,200,50,30);
  car3=createSprite(50,280,50,30);
  car4=createSprite(50,380,50,30);

  wall=createSprite(1200,380,55,800);
  wall.shapeColor=(20,230,100);


  speed1=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);

  weight=random(400,1500);


 
}

function draw() {
  background(0,0,0);  
  car1.velocityX= speed1;
  car2.velocityX= speed2;
  car3.velocityX= speed3;
  car4.velocityX= speed4;

if(wall.x-car1.x< wall.width/2+ car1.width/2 ){
  car1.velocityX=0;
  var deformation=0.5* weight* speed1* speed1/22500;
  if(deformation>180){
    car1.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100 ){
    car1.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car1.shapeColor=color(0,250,0);
  }
}

if(wall.x-car2.x< wall.width/2+ car2.width/2 ){
  car2.velocityX=0;
  var deformation=0.5* weight* speed2* speed2/22509;
  if(deformation>180){
    car2.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100 ){
    car2.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car2.shapeColor=color(0,250,0);
  }
}


if(wall.x-car3.x< wall.width/2+ car3.width/2 ){
  car3.velocityX=0;
  var deformation=0.5* weight* speed3* speed3/22509;
  if(deformation>180){
    car3.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100 ){
    car3.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car3.shapeColor=color(0,250,0);
  }
}

if(wall.x-car4.x< wall.width/2+ car4.width/2 ){
  car4.velocityX=0;
  var deformation=0.5* weight* speed4* speed4/22509;
  if(deformation>180){
    car4.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100 ){
    car4.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car4.shapeColor=color(0,250,0);
  }
}
  drawSprites();
}