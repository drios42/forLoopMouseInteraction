function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    background(255);
    for (var i = 0; i < width; i+=30) {
        for (var j = 0; j <height; j+=30) {
            
        if(dist(mouseX,mouseY, i,j) < 15 ){
            fill(255,0,0);
        }else{
            fill(255);
        }
            
            ellipse(i, j, 30, 30);

        }

    }
    
    
}
