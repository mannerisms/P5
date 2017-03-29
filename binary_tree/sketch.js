var tree;

function setup() {
    createCanvas(600, 400);
    background(51);
    tree = new Tree();
    for (var i = 0; i < 10; i++) {
        var val = int;
        tree.addValue(ceil((random(0,100))));
    }
    console.log(tree);
    tree.traverse();
}

