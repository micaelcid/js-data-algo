let array = new Array(10000000)

for(var i = 0; i < array.length; i++){
    array[i] = i + 1
}
const binarySearch = function (array, value){
    let high = array.length - 1
    let low = 0
    let mid = 0
    while(low <= high){
        mid = Math.floor((high + low) / 2)
        if(array[mid] == value)
            return mid

        if(array[mid] < value)
        {
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return -1
}

let startProgram = new Date().getTime()

let index = -1

index = binarySearch(array, 4000) // 0 - 1ms e oscila até 1 para cima

let endProgram = new Date().getTime()
if(index != -1){
    console.log(`O número ${array[index]} foi encontrado em ${endProgram - startProgram}ms`)
}
else{
    console.log(`O número não foi encontrado em ${endProgram - startProgram}ms`)
}

module.exports = binarySearch