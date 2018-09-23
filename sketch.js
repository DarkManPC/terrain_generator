// main file

// 1 - terrain generator
// 2 - car modelisation
// 3 - car physics

var t;

function setup(){
    createCanvas(400, 400, WEBGL);
    background(151);
    t = new Terrain(10,10);
}

function draw(){
    rotateX(1);
    translate(-width/2, -height/2);
    t.show(width, height);
}