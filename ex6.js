//Exercise 6
/* Create a tree structure and a function that 
will display all of the elements in that tree. 
The function should not require any change in case the structure changes.*/
"use strict";

const treeConstructor = (value, children = []) => ({ value, children });

const tree =
  treeConstructor("A", [
    treeConstructor("a", [ treeConstructor("aa") ]),
    treeConstructor("b", [ treeConstructor("ba"), treeConstructor("bb") ]),
    treeConstructor("c", [ treeConstructor("ca"), treeConstructor("cb", [ treeConstructor("cba") ]) ])
  ]);

  function printTree(node, depth = 0) {
  console.log("  ".repeat(depth) + node.value);
  for (let child of (node.children || [])) {
    printTree(child, depth + 1);
  }
}

printTree(tree);