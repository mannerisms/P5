var tree;

// function setup() {
//     noCanvas();
//     tree = new Tree();
//     tree.addValue(5);
//     tree.addValue(7);
//     tree.addValue(4);
//     tree.addValue(6);
//     console.log(tree);
//     tree.traverse();
// }

function setup() {
    noCanvas();
    tree = new Tree();
    for (var i = 0; i < 10; i++) {
        var val = int;
        tree.addValue(ceil((random(0,100))));
    }
    console.log(tree);
    tree.traverse();
}

