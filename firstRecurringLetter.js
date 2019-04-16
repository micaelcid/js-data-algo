// O(n) using Javascript find - min 3ms
function firstRecurringLetter(array){
    let letters = []
    for(let i in array){
        let first = letters.find(letter => letter == array[i])
        if(first) 
            return first
        letters.push(array[i])
    }
    return null
}

// // O(n) using HashTables - min 3ms
// function firstRecurringLetter(array){
//     let letters = []
//     for(let i in array){
//         let first = letters[array[i]] != undefined ? array[i] : false
//         if(first) 
//             return first
//         letters[array[i]] = 1
//     }
//     return null
// }

let startProgram = new Date().getTime()


string = "ABCAB"
result = firstRecurringLetter(string)
console.log(result)


let endProgram = new Date().getTime()

console.log(`${endProgram-startProgram}ms`)
