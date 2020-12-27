let angleLeft = 1
let counterAngle = 0

animate(() => {
  forward(1)
  right(angleLeft)
  counterAngle++

  if (counterAngle === 180) {
    angleLeft = 3    
  }
  
  if (counterAngle === 240) {
    angleLeft = 1    
    counterAngle = 0
  }

}, 10)


