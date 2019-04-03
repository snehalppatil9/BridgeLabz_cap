/************************Stack********************/

class Stack {
      constructor() {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
      }
      size() {
        return this.size;
      }
      isEmpty() {
        if (this.size == 0)
          return true;
        else
          return false;
      }
      //use
      push(data) {
        if (this.top == this.capacity - 1) {
          console.log("Stack overflow");
          return;
        }
        this.size++;
        this.item[++this.top] = data;
      }
      pop() {
        if (this.top == this.capacity - 1)
          console.log("Stack is empty");
        this.size--;
        return this.item.pop();
      }
      peek() {
        if (this.top == -1)
          console.log("Stack is empty");
        else
          return this.item[top];
      }
      print() {
        var str = "";
        for (var i = 0; i < this.size; i++) {
          str = str + " " + item[i];
        }
        return str;
      }


  getSize()
  {
      return this.size;

  }

      reversStack(items) {
        var newstack = new StackCalender;
        var n = this.getSize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;
  
    }
    
    
    }

/******************************************Stack Calender***********************/

class StackCalender {
  constructor() {
      this.items = [];
      this.size = 0;
      this.capacity;
      this.top = -1;
  }

  stack(capacity) {
      this.capacity = capacity;
      var t = new items[capacity];
  }

  push(data) {
      if (this.top == this.capacity - 1) {
          console.log("Stack Overflow");
          return;
      }
      this.size++;
      this.items[++this.top] = data;
  }

  pop() 
  {
      if (this.top == -1)
          console.log("stack is empty");
          this.size--;
      return this.items[this.top--];
  }


  isempty() {
      if (size == 0)
          return true;
      else
          return false;

  }


  
}





  module.exports={
    Stack,StackCalender
}