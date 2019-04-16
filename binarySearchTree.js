class Node{
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST{
    constructor(){
        this.root = null
    }
    add(data){
        let node = this.root
        if(node === null){
            this.root = new Node(data)
            return
        }
        else{
            const searchTree = function(node){
                if(data > node.data ){
                    if(node.right === null){
                        node.right = new Node(data)
                    }
                    else{
                        return searchTree(node.right)
                    }
                }
                else{
                    if(node.left === null){
                        node.left = new Node(data)
                    }
                    else{
                        return searchTree(node.left)
                    }
                }
            }
            return searchTree(node)
        }
    }
    find(data){
        const node = this.root
        const searchTree = function(node){
            if(node == null){
                return false
            }
            if(node.data == data){
                return data
            }
            else{
                if(data > node.data ){
                    return searchTree(node.right)
                }
                else{
                    return searchTree(node.left)
                }
            }
        }
        return searchTree(node)
    }
    all(){
        const node = this.root
        let collection = []
        const inOrderSearch = function(node){
            if(node == null)
                return true

            inOrderSearch(node.left)
            collection.push(node.data)
            inOrderSearch(node.right)

        }
        inOrderSearch(node)
        return collection
    }
}

let bst = new BST()
bst.add(1)
bst.add(5)
bst.add(3)
bst.add(2)
bst.add(122)
bst.add(245)
bst.add(78)
bst.add(8)
console.log(bst.all())