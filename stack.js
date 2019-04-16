function Stack(){
    let stack = []
    let count = 0
    this.push = function(value){
        stack[count] = value
        count++
    }
    this.pop = function(){
        if(this.isEmpty()){
            return undefined
        }
        count--
        let deleted = stack[count]
        delete stack[count]
        return deleted               
    }
    this.peek = function(){
        return stack[count-1]
    }
    this.getStack = function(){
        return stack
    }
    this.isEmpty = function(){
        return count == 0
    }
    
}

const stack = new Stack()
stack.push(1)
stack.push(7)
console.log(stack.getStack())
console.log(stack.peek())
stack.pop()
console.log(stack.getStack())
console.log(stack.peek())
stack.push(14)
stack.push(3)
stack.pop()
stack.push(2)
console.log(stack.getStack())