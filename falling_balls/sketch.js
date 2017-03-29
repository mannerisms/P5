var balls = [];
var numBalls = 200;

function setup() {
    createCanvas(640, 480);
    for (var i=0; i < numBalls; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(255);
    for (var i=0; i < balls.length; i++){
        if (balls[i].y - balls[i].radius > height){
            balls[i] = new Ball();
        }

        balls[i].move();
        balls[i].display();
    }
}