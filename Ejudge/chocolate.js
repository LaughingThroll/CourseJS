
// method One
// step 
// ? ? 1 1  
// ? ? ? ? 
// ? ? ? ?
// step 
// ? ? 1 1  
// ? ? 2 2 
// ? ? 3 3
// step 
// ? ? 1 1  
// ? 3 3 2 
// ? 4 4 2
// step 
// ? ? 1 1  
// ? 4 3 2 
// ? 4 3 2
// 3 * N
// count[i] - count approach divide 1x2
function chocolate(number) {
  if (number % 2) return 0
  const count = Array(number).fill(0)
  count[0] = 1
  for(let i = 2; i <= number; i += 2) {
    count[i] = count[i - 2] * 3
    for(let j = i - 4; j >= 0; j -= 2) {
      count[i] += count[j] * 2
    }
  }
  return count[number] 
}

console.log(chocolate(2))