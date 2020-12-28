function consistentLength(...args) {
  let counter = 0
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== 0) return counter
    counter++
  }
}

console.log(consistentLength(1, 7, 9, 5, 0))

