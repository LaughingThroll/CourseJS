function counterMax(...args) {
  let counter = 0
  let max = args[0]
  let currentArray = []
  for(let i = 0; i < args.length; i++) {
    if (max < args[i]) max = args[i]
    currentArray.push(args[i])
    if (args[i] === 0) break 
  }
  for(let i = 0; i < currentArray.length; i++) {
    if (currentArray[i] === max) counter++ 
  }
  return '-> ' + currentArray.join(' -> ') + ' -- <- ' + counter

}



console.log(counterMax(1, 7, 9 ,0, 1))
console.log(counterMax(1, 3, 3, 1, 0))