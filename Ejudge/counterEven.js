function counterEven(...args) {
  let counter = 0
  for (let i = 0; i < args.length; i++) {
    if (args[i] === 0) return counter
    if (!(args[i] % 2)) counter++ 
  }
}


console.log(counterEven(1, 2, 0))
console.log(counterEven(1, -1, 0))