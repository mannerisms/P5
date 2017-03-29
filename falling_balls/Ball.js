// Ball class
function Ball() {
    this.distance = random (0.0,5.0);
    this.speed = map(this.distance, 0.0, 5.0, 3.0, 1.0);
    this.radius = map(this.distance, 0.0, 5.0, 30.0, 10.0);
    this.x = random(0, width);
    this.y = random(-height, -this.radius);

    this.move = function() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed/2, this.speed);
        this.y += this.speed;
    }

    this.display = function() {
        noStroke();
        fill(155,50);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

}