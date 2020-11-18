var dogimg, happyDogimg, database;
var foodS, foodStock;

function preload()
{
  dogimg = loadImage("dogImg.png");
  happyDogimg =loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  dog =createSprite(250,250,40,40);
  dog.scale=0.25;
  dog.addImage("dog",dogimg);
  
 
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    foodS=foodS-1;
    writeStock(foodS);
   
    dog.addImage("happyDog",happyDogimg);
  }

  drawSprites();
  fill ("white");
  text("Resources"+foodS,250,100);
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
}



