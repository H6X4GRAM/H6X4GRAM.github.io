var img;
var initials ='bm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 245; // off white background
var lastscreenshot=61; // last screenshot never taken
var angle = 0.0;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('oilbrushsmall.png');
  img2 = loadImage('snake.png');
  img3 = loadImage('grass.png');
  img4 = loadImage('grass2.png');
  img5 = loadImage('oilbrusheraser.png');
  img6 = loadImage('raggedbrush.png');
  img7 = loadImage('bamboo.png');
  img8 = loadImage('airbrush.png');
  images = [img3, img4];
}

function setup() {
createCanvas(1500, 800);  // canvas size
background(245);   // use our background screen colo
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // fine pen
   
    stroke(0);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // pen

    stroke(0);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // thick pen

    stroke(0);
    strokeWeight(50);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { //square 
    stroke (0,0,0,30);
    strokeWeight(0);
    fill(0,0,0,30);
    rect(mouseX, mouseY, 30, 30); 
  } else if (key == '5') { // horizontal rectangle
    stroke (0,0,0,30);
    strokeWeight(0);
    fill(0,0,0,30);
    rect(mouseX, mouseY, 35, 15);
  } else if (toolChoice == '6') { //vertical rectangle
    stroke (0,0,0,30);
    strokeWeight(0);
    fill(0,0,0,30);
    rect(mouseX, mouseY, 15, 35);
  } else if (toolChoice == '7') { //airbrush thick
    image(img8, mouseX-50, mouseY-50, 100, 100);
  } else if (toolChoice == '8') { //airbrush thick
    image(img8, mouseX-250, mouseY-250, 500, 500);
  } else if (toolChoice == '9') { //paint
    image(img6, mouseX-25, mouseY-25, 50, 50);
  } else if (toolChoice == '0') { //eraser
    stroke(245);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'q' || toolChoice == 'Q') { //oil
    translate(mouseX, mouseY);
rotate(angle);
image(img,-15, -15, 30, 30);
angle += 0.035;
  } else if (toolChoice == 'w' || toolChoice == 'W') { //oil thick
    translate(mouseX, mouseY);
rotate(angle);
image(img,-30, -30, 60, 60);
angle += 0.035; 
  } else if (toolChoice == 'e' || toolChoice == 'E') { //oil eraser
    translate(mouseX, mouseY);
rotate(angle);
image(img5,-7.5, -7.5, 15, 15);
angle += 0.035;
  } else if (toolChoice == 'r' || toolChoice == 'R') { //oil eraser thick
    translate(mouseX, mouseY);
rotate(angle);
image(img5,-20, -20, 40, 40);
angle += 0.035;
  } else if (toolChoice == 's' || toolChoice == 'S') { //snake
    image(img2, mouseX-40, mouseY-40, 80, 80);
    
  }else if (toolChoice == 'g' || toolChoice == 'G') { //grass
    var randomImage = random(images);
    image(randomImage, mouseX-125, mouseY-115,random(300),random(300));
    key="";
  }else if (toolChoice == 'b' || toolChoice == 'B') { //bamboo
    image(img7, mouseX-140, mouseY-450,300,800);
    key="";
  } 
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
