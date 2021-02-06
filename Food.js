 class Food {

     constructor(){
     
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("Images/Milk.png")

     }

     getFoodStock(){

     }

     updateFoodStock(){

     }

     deductFood(){
         
     }


    display(){
        
        imageMode(CENTER)
        image(this.image,200,200,70,80)
        var x=80, y=100;
        if(this.foodStock != 0){

            for(var i=0 ; i< this.foodStock  ; i++  ){
                
                y=y+50;

                image(this.image,x,y,70,80)
            }


        }
    }


}