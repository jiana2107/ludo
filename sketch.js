var boardI;
var form;
var player;
var allPlayers;
var game;
var gameState=0;
var playerCount=0;

var sel;
var database;

function preload(){
  boardI=loadImage("ludo.jpg")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-150);
  
  database=firebase.database()
  form=new Form()
  player=new Player()
  game=new Game()
  //console.log(player)

  textAlign(CENTER);
  background(200);

}

function draw() {
  //background(boardI); 
  background("lightblue");
  
  form.display()
  //form.mySelectEvent()
  

  drawSprites();
}