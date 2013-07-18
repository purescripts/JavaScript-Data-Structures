/*****************************************
 * Data Structures: Singly LinkedList
 * Author:Michael Mariano
 * Date: July 2013
 *****************************************/

function LinkedList(){
	this.head=null;
	this.length=0;
}

LinkedList.prototype.add = function(data){
	this.length++;
	var node = {
			value:data,
			next:null
	};
	var current;
	if(this.head === null){
		this.head=node;
	}else{
		current= this.head;
		while(current.next){
			current=current.next;
		}
		current.next=node;
	}
	return node;
};

/**
 *Removes Object at value in LinkedList
 */
LinkedList.prototype.remove = function(val){
	var n = this.head;
	var idx=0;
	if(n === null){
		return -1;
	}
	if(n.value == val){
		this.head=n.next;
		this.length--;
		return idx;
	}else{
		while(n.next){
			if(n.next.value == val){
				n.next=n.next.next;
				this.length--;
				return idx;
			}
			n=n.next;
			idx++;
		}
	}
	return -1;
};
/**
 *Removes Object at idx in LinkedList
 */
LinkedList.prototype.removeIdx = function(idx){
	var n = this.head; var pos=0;
	if(idx < 0)
		return -1;
	if(idx == pos){
		this.head=n.next;
		this.length--;
		return pos;
	}else{
		while(n.next){
			if(++pos == idx){
				n.next=n.next.next;
				this.length--;
				return pos;
			}
			n=n.next;
		}
	}
	return -1;
};

LinkedList.prototype.indexOf = function(val){
	var n = this.head;
	var idx=0;
	if(n === null){
		return -1;
	}else{
		while(n){
			if(n.value == val){
				return idx;
			}
			n=n.next;
			idx++;
		}
	}
	return -1;
};

LinkedList.prototype.contains = function(val){
	var n = this.head;
	if(n === null){
		return false;
	}else{
		while(n){
			if(n.value == val){
				return true;
			}
			n=n.next;
		}
	}
	return false;
};

LinkedList.prototype.addOrder = function(data){
	this.length++;
	var node = {
			value:data,
			next:null
	};
	var n = this.head; 
	var temp; 
	var foundPos = false;
	if(n === null)//Add head
		this.head = node;
	else if(data <= n.value){//less than head node
		temp = node;
		temp.next = this.head;
		this.head = temp;
	}
	else{
		while(n.next){//search for position
			if(n.next.value >=data && n.value <= data){
				foundPos = true;
				break;
			}	
			n=n.next;
		}
		if(foundPos){//if found insert node between
			temp = node;
			temp.next= n.next;
			n.next = temp;
		}else//insert node at end of list
			n.next=node;
	}		
};	

LinkedList.prototype.clear = function(){
	this.head=null;
	this.length=0;
};

LinkedList.prototype.isEmpty= function(){
	return this.length == 0;
};

LinkedList.prototype.size = function(){
	return this.length;
};

LinkedList.prototype.printList = function(){
	var n = this.head;
	while(n){
		document.write(n.value+", ");
		n=n.next;
	}
};