let squreSize = 30
let startY = 10
let startX = 10

repeat(10, () => {
  goto(startY -= 10, startX -= 10)
  squreSize += 20
  forward(squreSize)
  right(90)
  forward(squreSize)
  right(90)
  forward(squreSize)
  right(90)
  forward(squreSize)
  right(90)
})
