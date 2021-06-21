var playerPaddle;

function setup(){
  createCanvas(400,400);
  //player paddle
  playerPaddle = new Paddle();
}

function draw(){
  //set background to sky blue
  background("blue");
  
  playerPaddle.xPosition = 385;
  playerPaddle.yPosition = mouseY
  
  playerPaddle.display();
  
  //computer paddle
  var computerPaddle = new Paddle();
  computerPaddle.xPosition = 5;
  computerPaddle.yPosition = 150;
  
  computerPaddle.display();
  
  //draw the ball
  rect(200,200,20,20)
}