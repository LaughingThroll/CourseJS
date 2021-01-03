const aL = [1, 2, 3, 4]
const aR = [1, 2, 3, 4]
// cycleShift in left
const tempL = aL[0]
for(let i = 0; i < aL.length - 1; i++) {
  aL[i] = aL[i + 1]
}
aL[aL.length - 1] = tempL

console.log(aL)

// cycleShift in right
const tempR = aR[aR.length - 1]
for(let i = aR.length - 2; i >=0 ; i--) {
  aR[i + 1] = aR[i]  
}
aR[0] = tempR
console.log(aR)