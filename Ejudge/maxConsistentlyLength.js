function maxConsisntetlyLength(arr) {
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    if (!arr[i]) return count + 1
    if (arr[i] === arr[i + 1] ) count++  
  }
}

console.log(maxConsisntetlyLength([4, 1, 1, 0, 1]))