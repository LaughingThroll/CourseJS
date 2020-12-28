function chessLady(x1, y1, x2, y2) {
  [...arguments].forEach(num => {
    if (num < 1 || num > 8) throw new Error('Input number from 1 to 8')
  })

  return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)    

}



console.log(chessLady(1, 1, 8, 8))
console.log(chessLady(1, 1, 8, 1))
console.log(chessLady(5, 5, 7, 4))

