function priorityQueue(){
    var queue = []

    this.enqueue = function(value){
        if(this.isEmpty()){
            queue.push(value)
        }
        else{
            let added = false
            for(let i = 0; i < this.size(); i++){
                if(value[1] < queue[i][1]){
                    queue.splice(i, 0, value)
                    added = true
                    break;
                }
            }
            if(!added){
                queue.push(value)
            }
        }
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

const queue = new priorityQueue()
queue.enqueue(['Fast and furious' ,3])
queue.enqueue(['Harry Potter', 1])
queue.enqueue(['Nietzsche wept', 2])
queue.enqueue(['Barbie and the pricess', 5])
console.log(queue.getQueue())