class Terrain{
    constructor(x,y){
        this.X = x;
        this.Y = y;
        this.init();
        this.xoff = 0;
    }

    init(){
        this.vertices = [];
        for(var i = 0; i < this.X; i++){
            this.vertices[i] = [];
            for(var j = 0; j < this.Y; j++){
                this.vertices[i][j] = createVector(i,j,0);
            }
        }
    }

    deplacement(){
        // make a perlin noise version
        for(var i = 0; i < this.X; i++){
            for(var j = 0; j < this.Y; j++){
                this.vertices[i][j].z=map(noise(i*0.1+this.xoff,j*0.1),0,1,-30,30); //=createVector(this.vertices[i][j].x, this.vertices[i][j].y, this.vertices[i+1][j].z);
            }
            this.xoff += 0.0005;
        }
        /*
        for(var i = 0; i < this.Y; i++){
            if (i == 0){
                this.vertices[this.X-1][i]= createVector(this.X-1, i, this.vertices[this.X-1][i].z+random(-10,10));
            }
            else{
                this.vertices[this.X-1][i]= createVector(this.X-1, i, (this.vertices[this.X-1][i].z + this.vertices[this.X-1][i-1].z)/2+random(-2,2));
            }
        }
        */
    }

    show(w,h){
        strokeWeight(1);
        stroke(50);
        fill(50,170,30);
        for (var y = 0; y < this.Y-1; y++) {
            beginShape(TRIANGLE_STRIP);
            for (var x = 0; x < this.X; x++) {
              vertex(this.vertices[x][y].x*w/this.X, this.vertices[x][y].y*h/this.Y, this.vertices[x][y].z);
              vertex(this.vertices[x][y].x*w/this.X, this.vertices[x][y+1].y*h/this.Y, this.vertices[x][y+1].z);
            }
            endShape();
          }
    }

    drawLine(x1, y1, z1, x2,y2, z2){
        beginShape();
        vertex(x1,y1,z1);
        vertex(x2,y2,z2);  
        endShape();
      }
}