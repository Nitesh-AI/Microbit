let microBit;
let button;

let iconLeft = [
  ['0', '0', '0', '0', '0'],
  ['0', '1', '0', '1', '0'],
  ['0', '0', '0', '0', '0'],
  ['1', '0', '0', '0', '1'],
  ['0', '1', '1', '1', '0']
]

let iconRight = [
  ['0', '0', '0', '0', '0'],
  ['0', '1', '0', '1', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '1', '1', '1', '0'],
  ['1', '0', '0', '0', '1']
]

function preload() {

}

function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);

  microBit=new uBit();

  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener

  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    microBit.writeMatrixIcon(iconLeft);
  });

  microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    microBit.writeMatrixText("Github!");
  });

  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });

}

function draw() {
  background(23);
  if (microBit.connected){

    // noStroke();
    push();
    rotateX(microBit.getAccelerometer().x/10);
    rotateY(microBit.getAccelerometer().y/10);
    box(150);
    pop();

  }


}

function searchDevice(){
  microBit.searchDevice();
}
