var bgImg;
var cat,catimg1,catimg2,catimg3 
var mouse, mouseimg1, mouseimg2,mouseimg3

function preload() {
 
    bgImg = loadImage("images/garden.png")
    catimg1 = loadAnimation ("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg3 = loadImage("images/cat4.png")
    mouseimg3 = loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
   
    garden = createSprite(500,400);
    garden.addImage("park",bgImg);

    cat = createSprite(700,600);
    cat.addAnimation("catSitting",catimg1);
    cat.scale = 0.1
    
    
    mouse = createSprite(450,620);
    mouse.addAnimation("mouseStanding",mouseimg1);
    mouse.scale = 0.1
}

function draw() {
 background("images/garden.png");
    //Write condition here to evalute if tom and jerry collide
       
     if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("catSitting",catimg3)
        cat.changeImage("catSitting")
        cat.velocityX = 0;
        mouse.addImage("mouseChecking",mouseimg3)
        mouse.changeImage("mouseChecking")
        
        //cat.addAnimation("catRunning",catimg2);
        //cat.chamgeAnimation("catRunning");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDElay = 25;
                       }
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catMoving",catimg2);
        cat.changeAnimation("catMoving");
        cat.frameDelay = 15;
        cat.velocityX = -2 ;
    }      
}