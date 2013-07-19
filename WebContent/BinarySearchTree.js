/*****************************************
* Data Structures: Binary Search Tree
* Author:Michael Mariano
* Date: July 2013
*****************************************/


function BinarySearchTree(){
	BinarySearchTree.prototype= {
		root: null,
		size: 0
	};
}

function Node(val){
	var node={	 
		left:null,
		right:null,
		value:val
	};
	return node;
}

BinarySearchTree.prototype.add= function(val){
	if (this.root == null)
		this.root = new Node(val);
	else
		addNode(this.root,val);
};

function addNode(node,val){
	if(val <= node.value)
		if(node.left)
			arguments.callee(node.left,val);
		else
			node.left= new Node(val);
	else
		if(node.right)	
			arguments.callee(node.right,val);
		else
			node.right= new Node(val);
};

BinarySearchTree.prototype.contains= function(val){
    var node= this.root;
    while(node){
 	    if(node.value==val)
 	        return true;
 	    else if(node.value < val)
 		    node=node.right;
 		else 
 		 	node=node.left;
 	}
	return false;
};

BinarySearchTree.prototype.inOrder = function(){
	inOrderHelper(this.root);
};

function inOrderHelper(node){
	if(node==null) return;
	inOrderHelper(node.left);
	document.write(node.value+", ");
	inOrderHelper(node.right);
};

BinarySearchTree.prototype.preOrder = function(){
	preOrderHelper(this.root);
};

function preOrderHelper(node){
	if(node==null) return;
	preOrderHelper(node.left);
	preOrderHelper(node.right);
	document.write(node.value+", ");
};

BinarySearchTree.prototype.postOrder = function(){
	postOrderHelper(this.root);
};

function postOrderHelper(node){
	if(node==null) return;
	document.write(node.value+", ");
	postOrderHelper(node.left);
	postOrderHelper(node.right);
};

