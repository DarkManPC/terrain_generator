// main file

// 1 - terrain generator
// 2 - car modelisation
// 3 - car physics

var t;
var angle = 0;

function setup(){
    createCanvas(800, 800, WEBGL);
    frameRate(30);
    t = new Terrain(50,50);

}

function draw(){
    background(151);
    t.deplacement();
    rotateX(radians(70));
    rotateZ(radians(angle));
    translate(-width/2, -height/2);
    t.show(width, height);
    angle++;
}