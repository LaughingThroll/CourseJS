
function sum(number) {
  return String(number).split('').reduce((acc, num) => acc += +num ,0)
}



console.log(sum(179))
console.log(sum(333))
console.log(sum(546))