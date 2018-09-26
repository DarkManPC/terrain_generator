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
                this.vertices[i][j] = createVector(i,j,0);//random(0,10));
            }
        }
    }

    deplacement(){
        for(var i = 0; i < this.X-1; i++){
            for(var j = 0; j < this.Y; j++){
                this.vertices[i][j]=createVector(this.vertices[i][j].x, this.vertices[i][j].y, this.vertices[i+1][j].z);
            }
        }
        for(var i = 0; i < this.Y; i++){
            if (i == 0){
                this.vertices[this.X-1][i]= createVector(this.X-1, i, this.vertices[this.X-1][i].z+random(-10,10));
            }
            else{
                this.vertices[this.X-1][i]= createVector(this.X-1, i, (this.vertices[this.X-1][i].z + this.vertices[this.X-1][i-1].z)/2+random(-2,2));
            }
        }
    }

    show(w,h){
        strokeWeight(0.8);
        fill(50,170,30, 150);;
        for(var i = 0; i < this.X-1; i++){
            for(var j = 0; j < this.Y-1; j++){
                /*
                if(j!=this.Y-1){
                    this.drawLine(this.vertices[i][j].x*w/this.X, this.vertices[i][j].y*h/this.Y, this.vertices[i][j].z,
                        this.vertices[i][j+1].x*w/this.X, this.vertices[i][j+1].y*h/this.Y, this.vertices[i][j+1].z);
                }
                if(i!=this.X-1){
                    this.drawLine(this.vertices[i][j].x*w/this.X, this.vertices[i][j].y*h/this.Y, this.vertices[i][j].z,
                        this.vertices[i+1][j].x*w/this.X, this.vertices[i+1][j].y*h/this.Y, this.vertices[i+1][j].z);
                }
                */
               beginShape();
               vertex(this.vertices[i][j].x*w/this.X, this.vertices[i][j].y*h/this.Y, this.vertices[i][j].z);
               vertex(this.vertices[i+1][j].x*w/this.X, this.vertices[i+1][j].y*h/this.Y, this.vertices[i+1][j].z);
               vertex(this.vertices[i+1][j+1].x*w/this.X, this.vertices[i+1][j+1].y*h/this.Y, this.vertices[i+1][j+1].z);
               vertex(this.vertices[i][j+1].x*w/this.X, this.vertices[i][j+1].y*h/this.Y, this.vertices[i][j+1].z);
               endShape();
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