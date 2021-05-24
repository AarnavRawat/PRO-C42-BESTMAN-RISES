class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.image2 = loadImage("Walking Frame/walking_2.png");
        this.image3 = loadImage("Walking Frame/walking_3.png");
        this.image4 = loadImage("Walking Frame/walking_4.png");
        this.image5 = loadImage("Walking Frame/walking_5.png");
        this.image6 = loadImage("Walking Frame/walking_6.png");
        this.image7 = loadImage("Walking Frame/walking_7.png");
        this.image8 = loadImage("Walking Frame/walking_8.png");

        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount%1===0){
            switch(rand){
                case 1: image(this.image,pos.x,pos.y+70,300,300);
                break;
                case 2: image(this.image2,pos.x,pos.y+70,300,300);
                break; 
                case 3: image(this.image3,pos.x,pos.y+70,300,300);
                break;
                case 4: image(this.image4,pos.x,pos.y+70,300,300);
                break;
                case 5: image(this.image5,pos.x,pos.y+70,300,300);
                break;
                case 6: image(this.image6,pos.x,pos.y+70,300,300);
                break; 
                case 7:image(this.image7,pos.x,pos.y+70,300,300);
                break;
                case 8: image(this.image8,pos.x,pos.y+70,300,300);
                break;
                default: break;
            }
        }
    }
}
