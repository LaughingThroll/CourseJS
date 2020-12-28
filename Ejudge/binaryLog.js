// 2 ** K >= N
function binaryLog(num) {
  let arr = []
  for(let i = 1; i <= num; i++) {
    i * i >= num && arr.push(i)
  }
  return Math.min(...arr)
}

console.log(binaryLog(4))
console.log(binaryLog(10))
console.log(binaryLog(1627))

