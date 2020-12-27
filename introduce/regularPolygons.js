


//  NO done
function regularPolygons(corners = 3) {
  if (corners < 3) throw new Error('it\'s line or point')
  let side = 40
  let rightAngle
  let R
  animate(() => {
    rightAngle = 360 / corners
    side += 10
    if (corners === 3) {
      R = side / (2 * Math.sin(360 / 2 * corners))
    }
     
    goto(R, -side / 2)
    repeat(corners, () => {
      forward(side)
      left(rightAngle)
    })
    
    corners++
    if (corners >= 10) stopAnimation()
  }, 100)
  

}

regularPolygons(3)

