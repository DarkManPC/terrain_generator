// main file

// 1 - terrain generator
// 2 - car modelisation
// 3 - car physics

var t;
var c
var angle = 0;
var m_X = 380;
var fps = 0;

function setup(){
    createCanvas(1000, 800, WEBGL);
    //frameRate(30);
    t = new Terrain(75,75);
    c = new Car();

}

function draw(){
    background(151);
    push();
    if(frameCount%4==0){
        t.deplacement();
    }
    rotateX(radians(70));
    rotateZ(radians(angle));
    translate(-width/2, -height/2);
    t.show(width, height);
    c.show();
    pop();
    drawFPS(-480, -380);
    angle = slider(380,480,-380,0,360);
}

function slider(x1, x2, y, min, max){
    strokeWeight(2);
    fill(200);
    stroke(50);
    line(x1,y,x2,y);
    if(mouseIsPressed 
        && (mouseX-width/2 >= m_X-10 && mouseX-width/2 <= m_X+10) && (mouseY-height/2 >= y-10 && mouseY-height/2 <= y+10)
        && (mouseX-width/2 >= x1 && mouseX-width/2 <= x2)){
        m_X = mouseX-width/2;
    }
    ellipse(m_X,y,10,10);
    return (max-min)*((m_X-x1)/(x2-x1))+min;
}

function drawFPS(x, y){
    //As P5.js does not support text() in 3D renderer, we have to display FPS shape, rect, ...
    strokeWeight(2);
    fill(151);
    stroke(50);
    rect(x,y,100,10);
    fill(255,100,100);
    noStroke();
    if(frameCount%5==0){
        fps = frameRate()*100/60;
    }
    rect(x,y,fps,10);
}