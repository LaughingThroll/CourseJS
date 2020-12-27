
function stars(n) {
  if (n <= 6) throw new Error('Input numer > 6')
  let counter = 0
  let rightAngle = 360 / n 
  let starsAngle = n % 2 === 1 ? rightAngle * Math.floor(n / 2) : rightAngle * 3   
  
  animate(() => {
    counter++
    forward(80)
    left(starsAngle)
    if (counter === n) stopAnimation()
  }, 100)
}

stars(8)
