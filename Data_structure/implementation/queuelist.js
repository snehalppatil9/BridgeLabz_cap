/*******************Queue******************/

class Queue {

    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.front = -1;
        this.rear = -1;
    }
    stack(capacity) {
        this.capacity = capacity;
        var t = new items[capacity];
    }
    //use

    enque(data) {
        console.log(data);
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        if (this.front == -1) {
            this.front++;
        }
        this.size++;
        this.items[++this.rear] = data;

    }
    //use
    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items[this.front++];

        this.size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return ele;
    }

    getSize() {
        return this.size;

    }

    isempty() {
        if (size == 0)
            return true;
        else
            return false;

    }

    display() {
        var res = "";
        for (var i = this.front; i <= this.rear; i++) {
            var res = res + this.items[i];
            if (i < this.rear) {
                res = res + ",";
            }

        }
        //console.log(res);
        
        return res;
    }

    monthof(m)
    {
        switch (m) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;
    
        }
    }


}





/******************************************DeQueueImplementation************************************
 *5.PalindromeChecker 
 ***************************************************************************************************/

class Dequeue {
    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }
    isFull() {
        if (this.front == 0 && this.rear == this.size - 1 || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    isEmpty() {
        return this.front == -1;
    }
    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    addRear(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;

        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }
    removeFront() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;

        }
        var item;
        if (this.front == this.rear) {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front == this.arr.length - 1) {
            item = this.arr[this.front];
            this.front--;
        }
        else {
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }
    removeRear() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;

        }
        var item;
        if (this.arear == this.front) {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if (this.rear == 0) {
            item = this.arr[this.rear];
            this.rear = this.rear--;
        }
        return item;
    }
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }
    palindromeChecker(str) {
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
        while (this.front != this.rear && this.front < this.rear) {
            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}


module.exports={
    Queue,Dequeue
}

