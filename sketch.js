var mySound;
var once = 1;
var actualTime;
var loadTime;

function setup() {
  frameRate(60);
  createCanvas(640, 480);
  background(0);
  mySound = loadSound("bolero.mp3", playMusic);
}

function draw() {
  background(0);
  actualTime = millis() - loadTime;
  println(actualTime);

  if(actualTime > 1000 && actualTime < 2000){
    ellipse(100, 100, 100);
  }
}

function playMusic(){
  loadTime = millis();
  mySound.play();
}

function mouseReleased(){
  if(once == 1){
    mySound.pause();
    once = 0;
  } else {
    mySound.play();
    once = 1;
  }
}
