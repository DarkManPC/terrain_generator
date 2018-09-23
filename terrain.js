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
                this.vertices[i][j] = createVector(i,j,random(10,50));
            }
        }
    }

    deplacement(){
        for(var i = 0; i < this.X; i++){
            for(var j = 0; j < this.Y-1; j++){
                this.vertices[i][j]=this.vertices[i][j+1];
            }
        }
        /*for(var i = 0; i < this.X; i++){
            this.vertices[i][this.Y]= createVector(i,this.Y,2)
        }*/
    }


    show(w,h){
        strokeWeight(3);
        noFill();
        for(var i = 0; i < this.X; i++){
            for(var j = 0; j < this.Y; j++){
                if(j!=this.Y-1){
                    this.drawLine(this.vertices[i][j].x*w/this.X, this.vertices[i][j].y*h/this.Y, this.vertices[i][j].z,
                        this.vertices[i][j+1].x*w/this.X, this.vertices[i][j+1].y*h/this.Y, this.vertices[i][j+1].z);
                }
                if(i!=this.X-1){
                    this.drawLine(this.vertices[i][j].x*w/this.X, this.vertices[i][j].y*h/this.Y, this.vertices[i][j].z,
                        this.vertices[i+1][j].x*w/this.X, this.vertices[i+1][j].y*h/this.Y, this.vertices[i+1][j].z);
                }
            }
        }
    }

    drawLine(x1, y1, z1, x2,y2, z2){
        beginShape();
        vertex(x1,y1,z1);
        vertex(x2,y2,z2);  
        endShape();
      }
}