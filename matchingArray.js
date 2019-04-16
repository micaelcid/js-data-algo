function matchingArray(arr1, arr2){
  let collection = {};
  if(arr1.length != arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    if(collection[arr1[i]] != undefined){
      collection[arr1[i]] += 1
    }
    else{
      collection[arr1[i]] = 1
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if(collection[arr2[i]] != undefined){
      collection[arr2[i]] -= 1
      if(collection[arr2[i]] < 0){
        return false
      }
    }
    else{
      return false
    }
  }
  return true
}

const result = matchingArray([2, 3, 1, 1], [3, 4, 2, 1])
console.log(result)