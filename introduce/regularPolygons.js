



function regularPolygons(corners = 3) {
  if (corners < 3) throw new Error('it\'s line or point')
  let side = 0
  let rightAngle
  let n = 2
  animate(() => {
    rightAngle = 360 / corners
    side += 10
    goto(side, -side / 2)
    // console.log(side)
    repeat(corners, () => {
      forward(side)
      left(rightAngle)
    })
    // n += .1
    corners++
    if (corners === 10) stopAnimation()
  }, 100)


}

regularPolygons(3)

