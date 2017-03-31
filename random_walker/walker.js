function Walker() {
    self.x;
    self.y;
}

Walker.prototype.createWalker = function() {
    self.x = width / 2;
    self.y = height / 2;
};

Walker.prototype.display = function() {
    stroke(255);
    point(self.x, self.y);
};

Walker.prototype.step = function() {
    var stepx = round(random(-1,1));
    var stepy = round(random(-1,1));
    self.x += stepx;
    self.y += stepy;
};