var elements = 0;

function setup() {
    noCanvas();
    tree = new Tree();
    for (i = 0 ; i < 10; i++){
        tree.addNode(ceil(random(0,100)));
    }
    console.log(tree);
    tree.traverse();
}

function draw() {
}