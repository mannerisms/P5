function Tree() {
    this.root = null;
}

Tree.prototype.addNode = function(value) {
    // Check if root is empty
    if (this.root == null) {
        // Set root node
        this.root = new Node();
        elements++;
    }
    this.root.addValue(value, null);
};

Tree.prototype.traverse = function(n) {
    if (n == null){
        this.traverse(this.root);
    }else{
        if(n.left != null){
            this.traverse(n.left);
        }
        console.log(n.value);
        if (n.right != null){
            this.traverse(n.right);
        }
    }
};