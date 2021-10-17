var road
var roadImg

var mainPlayer
var mainPlayerimg

var opponent1
var opponent1Img

var opponent2
var opponent2Img

var opponent1group
var opponent2group

var mainPlayercollideImg
var opponent1collideImg
var opponent2collideImg

var gamestate="play"

function preload(){
roadImg=loadImage("Road.png")

mainPlayerimg=loadAnimation("mainPlayer1.png","mainPlayer2.png")
mainPlayercollideImg=loadAnimation("mainPlayer3.png")
opponent1collideImg=loadAnimation("opponent3.png")
opponent2collideImg=loadAnimation("opponent6.png")
opponent1Img=loadAnimation("opponent1.png","opponent2.png")
opponent2Img=loadAnimation("opponent4.png","opponent5.png")
}


function setup(){
createCanvas(1000,400)
road = createSprite(200,200)
mainPlayer = createSprite(100,200)

mainPlayer.addAnimation("main",mainPlayerimg)
road.addImage("road",roadImg)

mainPlayer.scale = 0.1

road.velocityX = -3

opponent1group=new Group ()
opponent2group=new Group ()
}


function draw(){

if(gamestate=="play"){
  if(road.x<0){
    road.x = 500
  }
var storing=Math.round(random(1,2))
if(frameCount%20==0){
  if(storing==1){
    spawnOpponent1()
  
  }
  else if(storing==2){
    spawnOpponent2()
  }
}
mainPlayer.y = mouseY
if(opponent1group.isTouching(mainPlayer)){
gamestate="end"
  mainPlayer.velocityX=0
opponent1.velocityY=0
opponent2.velocityY=0
opponent1group.setVelocityXEach(0)
opponent2group.setVelocityXEach(0)
  opponent1.addAnimation("opponent1",opponent1collideImg)
  }

  if(opponent2group.isTouching(mainPlayer)){
    gamestate="end"
      mainPlayer.velocityX=0
    opponent2.velocityY=0
    opponent1.velocityY=0
    opponent1group.setVelocityXEach(0)
opponent2group.setVelocityXEach(0)
      opponent2.addAnimation("opponent2",opponent2collideImg)
      }

}
else if(gamestate=="end"){
road.velocityX=0
mainPlayer.velocityX=0
mainPlayer.addAnimation("main",mainPlayercollideImg)
opponent1group.setVelocityXEach(0)
opponent2group.setVelocityXEach(0)
}

















drawSprites();
}

function spawnOpponent1() {
  if(frameCount%100==0){
     opponent1 = createSprite(1000,random(0,400))
    opponent1.scale = 0.07

    opponent1.addAnimation("opponent1",opponent1Img)
    //opponent1.addImage("collide1",opponent1collideImg)
    opponent1.velocityX = -5

    opponent1group.add(opponent1)
  }
}

function spawnOpponent2(){
  if(frameCount%100==0){
    opponent2 = createSprite(1000,random(0,400))
    opponent2.scale = 0.07

    opponent2.addAnimation("opponent2",opponent2Img)
    opponent2.velocityX = -5

    opponent2group.add(opponent2)
  }
}