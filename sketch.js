var angle = 0;
var speed = 0.005;


function preload() {
    song = loadSound("music/strc.wav");
}

function setup() {
    song.loop();
    //text("[p]: play/pause | [left mouse]: reset drawing | build for chrome",10,height-10);
    createCanvas(windowWidth,windowHeight);
    fft = new p5.FFT(0.9,1024);
    amp = new p5.Amplitude(0.99);

    high = new High(0,0);
    drum = new Mid(0,0);
    bass = new Low(0,0);
}

//---press "p" to play/stop music---//
/*function keyTyped() {
    if (key === "p") {
        if (song.isPlaying()) {
            song.pause();
            noLoop();
        } else {
            song.loop();
            loop();
        }
    }
}*/

function mousePressed() {
  clear();
  fill(255)
  //text("[p]: play/pause | [left mouse]: reset drawing | build for chrome",10,height-10);
  console.log("clear")
}


function draw() {

    fft.analyze();
    vol = amp.getLevel();

    //----get energy level from low,mid & high frequencies----//
    energy1 = fft.getEnergy("bass");
    energy2 = fft.getEnergy("lowMid");
    energy3 = fft.getEnergy(10000,13000);

    //----map energy level to ellipse diameter----//
    diam1 = map(energy1, 0,255,0,100);
    diam2 = map(energy2, 0,255,0,70);
    diam3 = map(energy3, 0,255,0,120);
    
    var l0 = map(mouseX,0,width,0,300);
    var l1 = map(mouseY,0,height,0,300);

    c4 = color(0);
    
    push();
   
    translate(window.innerWidth/2, window.innerHeight/2);
    rotate(angle);
    for ( var i=0; i<3; i++){
        push();
        rotate(i*TWO_PI/3);
        translate(0,l0);
        stroke(c4);
        //fill(255);
        bass.update();
        //ellipse(0,0,25,25);
        
        rotate(angle);
        for ( var j=0; j<3; j++){
            push();
            rotate(j*TWO_PI/3);
            translate(0,l1);
            stroke(c4)
            //fill(200,50,0);
            drum.update();
            //ellipse(0,0,25,25);
                
            rotate(angle);
            for ( var k=0; k<3; k++){
                push();
                rotate(k*TWO_PI/3);
                translate(0,50);
                stroke(c4);//gold
                //fill(100,0,0);
                high.update();
                //ellipse(0,0,25,25);
                
               
                

                pop();
            }
            pop();
        }
        
        pop();
    
   }
    angle += speed;
  pop();

  //console.log("FPS: " + getFrameRate())
    
    
}


