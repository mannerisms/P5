function Node(){
    this.value = null;
    this.left = null;
    this.right = null;
    this.parent = null;
}

Node.prototype.addValue = function(value, parent) {
    if (this.value == null){
        this.value = value;
        this.parent = parent;
    }else if (value < this.value){
        if (this.left == null){
            this.left = new Node();
            elements++;
        }
        this.left.addValue(value, this);
    }else if (value > this.value){
        if (this.right == null){
            this.right = new Node();
            elements++;
        }
        this.right.addValue(value, this);
    }
}