class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;  
    }

}


class LinkedList{
    constructor(){
        this.head = null; 
        this.size = 0; 
    }

// adding element in the link list use
add(data) {
    var node = new Node(data);
    if (this.head == null) {
        this.head = node;
    }
    else {
        var temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = node;
    }
    this.size++;
}


//  search element is in the list or not use


    search(data1) {
       
            var temp = this.head;
            while (temp) {
                if (temp.data == data1) {
                    return true;
                }
                else
                    temp = temp.next;
            }
      
        return false;
    }
    


//insert element at the index position

insertAt(data,index){
    if(index>0 && index>this.size)
        return false;
    else{
        var node=new Node(data);
        var curr,prev;
        curr=this.head;
        if(index==0){
            node.next=head;
            head.next=node;
        }
        else{
           curr=this.head;
           var i=0;
           while(i<index){
               i++;
               prev=curr;
               curr = curr.next; 
           }
           node.next = curr; 
           prev.next = node; 
        }
        this.size++;
    }

}


//remove element from the specified location

removeAt(index) {
    if (index < 0) {
        console.log("Please enter correct index");
        return false;
    }
    else if (index == 1) {
        this.deleteFirst();
        return;
    }
    var curr = this.head, pre = curr, c = 0;
    while (curr) {
        if (c == index - 1) {
            pre.next = curr.next;
            this.size--;
           // return curr.data;
        }
        c++;
        pre = curr;
        curr = curr.next;
    }
    return null;
}


deleteFirst() {
    if (this.head == null) {
        console.log("Linked List empty");
        return;
    }
    var n = this.head.data;
    this.head = this.head.next;
    this.size--;
    return n;
}


//remove given element from list use

removeEle(data){
    var temp = this.head;
        var t = null;
        while (temp != null) {
            if (temp.data == data) {
                if (t == null) {
                    this.head = temp.next;
                }
                else {
                    t.next = temp.next;
                }
                this.size--;
                return temp.data;
            }
            t = temp;
            temp = temp.next;
        }
//return -1;    
}

//it returns the index of the given element

indexOf(data){
    var count=0;
    var curr=this.head;

    while(curr !=null){
        if(curr.data==data)
        {
          return count;  
        }
        count++;
        curr=curr.next;
       
    }
    return false;
}

//adding data to the position where the data can fit use
addToPos(data) {
    var temp = this.head;
    var prev = temp;

    if (data < temp.data) {//checking for the 1st data
        this.insertFirst(data);
        return
    }
    var node = new Node(data);//creating new node
    while (temp.next) {
        if (temp.data < data) {
            prev = temp;
            temp = temp.next;
        }
        else {
            prev.next = node
            node.next = temp

            break;
        }
    }
    if (!temp.next) {//if the data is adding at the last
        temp.next = node;
    }
    this.size++;
}

//inserting data for the first time use
insertFirst(data) {
    var node = new Node(data);
    if (this.first == null) {
        this.first = node;
        this.size++;
        return;
    }
    else {
        node.next = this.first;
        this.first = node;
        this.size++;
        return;
    }
}

// To check link list is empty
isEmpty(){
   return this.size==0;
}

// find the size of link list
sizeOflist(){
    console.log(this.size);
    
}


//display elements of linklist use
displayList(){
    var st = "";
        var temp = this.head;
        while (temp) {
            st = st + " " + temp.data;
            temp = temp.next;
        }
        //console.log(st)
return st;
}


printListStock() {
    var curr = this.head;
    var str = [];
    while (curr) {
        str.push(curr.data);
        curr = curr.next;
    }
    return str;
}


}
module.exports={
    LinkedList
}
