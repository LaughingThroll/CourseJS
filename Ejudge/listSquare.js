function listSquare(number) {
  let arr = []
  for (let i = 1; i < number; i++) {
    const square = i ** 2 
    if (square <= number) {
      arr.push(square)
    } else {
      console.log(arr.join(' '))
      return
    } 
  }
  
}

listSquare(50)
listSquare(16)

