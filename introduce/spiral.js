let counter = 0.1
animate(() => {
  forward(counter += .1)
  left(20)
}, 100)
