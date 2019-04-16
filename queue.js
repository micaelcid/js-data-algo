function Queue(){
    var queue = []

    this.enqueue = function(value){
        queue.push(value)
    }

    this.dequeue = function(){
        return queue.shift()
    }

    this.getQueue = function(){
        return queue
    }

    this.size = function(){
        return queue.length
    }

    this.isEmpty = function(){
        return queue.length === 0
    }
}

const queue = new Queue()
queue.enqueue(3)
queue.enqueue(1)
queue.dequeue()
queue.enqueue(2)
queue.enqueue(5)
console.log(queue.getQueue())