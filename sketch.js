var guy, guyimg
var cloud, cloudimg
var ground, groundimg
var bg, bgimg
var spike, spikeimg
var spike2, spike3
var monster, monsterimg
var coin, coinimg
var apple, appleimg
var portal, portalimg
var coin2, coin3

function preload(){
  guyimg = loadImage("guy.png")
  cloudimg = loadImage("cloud.png")
  groundimg = loadImage("groundimg.png")
  bgimg = loadImage("bg.png")
  spikeimg = loadImage("spike_top.png")
  monsterimg = loadImage("monster.png")
  appleimg = loadImage("red_apple.png")
  coinimg = loadImage("coin_gold.png")
  portalimg = loadImage("portal_yellow.png")
}

function setup() {
  createCanvas(1365, 650)
  guy = createSprite(50,530,50,50)
  guy.addImage(guyimg)
  guy.scale = 0.4
  ground = createSprite(50,600,420,50)
  ground.addImage(groundimg)
  monster = createSprite(900,200,50,50)
  monster.addImage(monsterimg)
  monster.scale = 0.25
  spike = createSprite(500,600,50,50)
  spike.addImage(spikeimg)
  spike.scale = 0.5
  spike2 = createSprite(900,600,50,50)
  spike2.addImage(spikeimg)
  spike2.scale = 0.5
  spike3 = createSprite(500,225,50,50)
  spike3.addImage(spikeimg)
  spike3.scale = 0.5
  portal = createSprite(1300,150,50,50)
  portal.addImage(portalimg)
  portal.scale = 0.5
  coin = createSprite(200,400,50,50)
  coin.addImage(coinimg)
  coin.scale = 0.75
  coin2 = createSprite(200,550,50,50)
  coin2.addImage(coinimg)
  coin2.scale = 0.75
  coin3 = createSprite(700,200,50,50)
  coin3.addImage(coinimg)
  coin3.scale = 0.75


  wall1 = createSprite(250,620,200,20)
  wall1.shapeColor="red"
  wall2 = createSprite(450,620,200,20)
  wall2.shapeColor="blue"
  wall3 = createSprite(650,620,200,20)
  wall3.shapeColor="green"
  wall4 = createSprite(850,620,200,20)
  wall4.shapeColor=rgb(142,50,19)
  wall5 = createSprite(1050,620,200,20)
  wall5.shapeColor="cyan"
  wall6 = createSprite(1250,620,200,20)
  wall6.shapeColor="yellow"
  wall7 = createSprite(250,450,200,20)
  wall7.shapeColor="orange"
  wall8= createSprite(550,450,200,20)
  wall8.shapeColor="brown"
  wall9 = createSprite(650,450,200,20)
  wall9.shapeColor="black"
  wall10 = createSprite(950,450,200,20)
  wall10.shapeColor="maroon"

  wall11= createSprite(1050,450,200,20)
  wall11.shapeColor="purple"

  wall12= createSprite(1200,450,100,20)
  wall12.shapeColor= rgb(12,15,80)

  wall13= createSprite(400,250,200,20)
  wall13.shapeColor="pink"
  wall14 = createSprite(150,350,20,200)
  wall14.shapeColor= rgb(43,43,76)
  wall15= createSprite(600,250,200,20)
  wall15.shapeColor="black"
  wall13= createSprite(800,250,200,20)
  wall13.shapeColor="red"
  wall13= createSprite(1000,250,200,20)
  wall13.shapeColor="purple"
  wall13= createSprite(1200,200,200,20)
  wall13.shapeColor="lime"

  
}

function draw() {
  background(bgimg);
  if(keyDown(RIGHT_ARROW)){
    guy.x = guy.x+5
  }
  if(keyDown(UP_ARROW)){
    guy.y = guy.y-10
  }
  if(keyDown(LEFT_ARROW)){
    guy.x = guy.x-5
  }
  spawnClouds()
  drawSprites()
}

function spawnClouds(){
  if(frameCount%120===0){
    cloud = createSprite(1365,100,50,50)
    cloud.addImage(cloudimg)
    cloud.scale = 0.2
    cloud.velocityX = -5
    cloud.y = Math.round(random(35,80))
    cloud.lifetime = 250
  }
}