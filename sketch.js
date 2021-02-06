var dog,sadDog,happyDog
var petfeed,addfeed,foodOBJ;
var foodStock=0;
var foodS=0;
var database;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  Milk=loadImage("Images/Milk.png")
  MilkImage=loadImage("Images/milkImage.png")
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodOBJ = new Food();

  feed=createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood=createButton("add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFood)

}

function draw() {
  background(46,139,87);
  
  foodOBJ.display()
  drawSprites();
}

/*
function addFoods()
{
  foodStock = foodStock + 1;
  foodOBJ.display()
}

function feedDog()
{
  foodStock = foodStock - 1;
  dog=createSprite(800,200,150,150);
  dog.addImage(happyDog);
  dog.scale=0.15;
}
*/
//function to read food Stock


//function to update food stock and last fed time
function feedDog(){

  dog.addImage(happyDog)
  if(foodOBJ.getFoodStock()<=0){
    foodOBJ.updateFoodStock(foodOBJ.getFoodStock()*0)
  }
  else{
    foodOBJ.updateFoodStock(foodOBJ.getFoodStock()-1)
  }

  database.ref('/').update({food:foodOBJ.getFoodStock()})

}

//function to add food in stock
function addFood(){
  foodS++
  database.ref('/').update({ food:foodS})
}