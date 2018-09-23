class Terrain{
    constructor(x,y){
        this.X = x;
        this.Y = y;
        this.init();
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
        for(var i = 0; i < this.X; i++){
            for(var j = 0; j < this.Y-1; j++){
                this.vertices[i][j]=this.vertices[i][j+1];
            }
        for(var i = 0; i < this.Y; i++){
            this.vertices[i][this.Y]= createVector(i,this.Y,2)
        }
    }
}

    show(w,h){
        strokeWeight(3);
        noFill();
        beginShape(TRIANGLES);
        for(var i = 0; i < this.X; i++){
            for(var j = 0; j < this.Y; j++){
                vertex(this.vertices[i][j].x*w/this.X, this.vertices[i][j].y*h/this.Y, -10);
            }
        }
        endShape();
    }
}