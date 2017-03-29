function Tree() {
    this.root = null;
}

Tree.prototype.traverse = function() {
    this.root.visit();
};

Tree.prototype.search = function(val) {
    var found = this.root.search(val);
    return found;
};

Tree.prototype.addValue = function(value) {
    var n = new Node(value);
    if (this.root == null) {
        this.root = n;
        this.root.x = width / 2;
        this.root.y = 16;
    }else{
        this.root.addNode(n);
    }
}