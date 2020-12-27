
function createButterfly(countCircle) {
  let radius = 30
  let counterCircle = 0
  let innerCounter = 0
  animate(() => {
    radius += 10
    repeat(2, () => {
      innerCounter++
      if (innerCounter % 2) {
        goto(radius, 0)
      } else {
        goto(-radius, 0)
      }
      circle(radius)
      counterCircle++
    })
    if (counterCircle === countCircle) stopAnimation()
  }, 100)
}

createButterfly(10)