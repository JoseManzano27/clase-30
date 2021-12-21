class Pig extends baseclass{
    constructor(x, y) {
      super(x,y,50,50);
      this.image=loadImage("sprites/enemy.png")
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed<4.5){
        super.display();
        }
     else{
       World.remove(world,this.body)
     }
    }
  };
  
