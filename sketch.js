var bg, bgImg;
var player,playerImg;
var cone,coneImg;
var coneGroup;

function preload(){
    bgImg = loadImage("poolbackground.jpg");
    playerImg = loadImage("boyswimming.png");
    coneImg = loadImage("coneImg.png")
    
}

function setup(){
    createCanvas(700,600)

    bg = createSprite(600,300);
    bg.addImage(bgImg);
    bg.velocityX = -3;
    bg.scale = 1.5;

    player = createSprite(55,470);
    player.addImage(playerImg);
    player.scale = 0.3;

    coneGroup = new Group;

    stroke("red");
    fill("red")
    textSize(20);
    
}

function draw(){
    background(0);
    
    if(bg.x < 150){
        bg.x = bg.width/2;
    }

    if(keyDown("UP_ARROW")){
        player.y = player.y-4;
    }

    if(keyDown("DOWN_ARROW")){
        player.y = player.y+4;
    }
    
    if(keyDown("RIGHT_ARROW")){
        player.x = player.x+4;
    }

    if(keyDown("LEFT_ARROW")){
        player.x = player.x-4;
    }
    

    if(coneGroup.isTouching(player)){
        text("GAME OVER YOU LOST",250,300)
        textSize(20)
        textColor(red)
        coneGroup[0].destroy();
    }

    spawnCone();
    drawSprites();
}

function spawnCone(){
    if(World.frameCount % 150 === 0){
        cone = createSprite(700,300);
        cone.y = Math.round(random(450,600));
        
        cone.addImage(coneImg);
        cone.setCollider("rectangle",1,1,1,1);
        cone.velocityX = -7
        cone.scale = 0.1;
        coneGroup.add(cone);
        cone.lifetime = 233;
      
    }
}