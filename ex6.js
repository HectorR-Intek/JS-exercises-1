//Exercise 6
/* Create a tree structure and a function that 
will display all of the elements in that tree. 
The function should not require any change in case the structure changes.*/
"use strict";
class TreeNode {
    constructor(value) {
        this.value = String(value);
        this.left  = null;
        this.right = null;
    }

    compareStrings(a,b){
        return a.localeCompare(b);
    }

    insert(newValue) {
        const cmp = this.compareStrings(newValue, this.value);
        if (cmp<0) {
            if (this.left === null) {
                this.left = new TreeNode(newValue);
            } else {
                this.left.insert(newValue);
            }
        } else {
            if (this.right === null) {
                this.right = new TreeNode(newValue);
            } else {
                this.right.insert(newValue);
            }
        }
    }

    showDisplay(){
        console.log(JSON.stringify(this, null, 2));
    }
}



const treeOne = new TreeNode("a");
treeOne.insert("b");
treeOne.insert("c");
treeOne.insert("aa");
treeOne.insert("ba");
treeOne.insert("bb");
treeOne.insert("ca");
treeOne.insert("cb");
treeOne.insert("cba");
treeOne.showDisplay();
