var w;

function setup() {
    createCanvas(600, 400);
    background(0);
    w = new Walker;
    w.createWalker();
}

function draw() {
    w.step();
    w.display();
}
