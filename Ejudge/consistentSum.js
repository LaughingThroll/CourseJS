function consistentSum(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    if (args[i] === 0) return sum 
    sum += args[i]
  }
}


console.log(consistentSum(5, 3, 10, 0))
console.log(consistentSum(17, -4, 0))