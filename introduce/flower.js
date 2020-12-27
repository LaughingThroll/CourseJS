function myCircle() {
  const radius = 40
  animate(() => {
    penUp()
    left(300)
    forward(radius)
    penDown()
    circle(radius)
  }, 1000)
}

myCircle()
