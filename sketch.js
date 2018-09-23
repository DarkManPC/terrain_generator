// main file

// 1 - terrain generator
// 2 - car modelisation
// 3 - car physics

var t;
var angle = 0;

function setup(){
    createCanvas(400, 400, WEBGL);
    frameRate(10);
    t = new Terrain(10,10);

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