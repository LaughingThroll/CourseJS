const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
window.addEventListener('resize', () => {
  canvas.height = document.body.clientHeight
  canvas.width = document.body.clientWidth
})

let arr = [
  {
    coords: {
      x: 35,
      y: 35
    },
    velocity: {
      x: 1,
      y: 1
    },
    accelearation: {
      x: .1,
      y: .1
    }
  },
  {
    coords: {
      x: 135,
      y: 535
    },
    velocity: {
      x: 1,
      y: 1
    },
    accelearation: {
      x: .2,
      y: .2
    }
  },
  {
    coords: {
      x: 535,
      y: 535
    },
    velocity: {
      x: 2,
      y: 2
    },
    accelearation: {
      x: .1,
      y: .1
    }
  },
  {
    coords: {
      x: canvas.width - 35,
      y: canvas.height - 35
    },
    velocity: {
      x: 5,
      y: 5
    },
    accelearation: {
      x: .1,
      y: .1
    }
  }
]


function circle(x, y) {
  ctx.fillStyle = 'red'
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(x, y, 30, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
}


function addCoords(coords, velocity) {
  console.log('coords', coords.x)
  console.log('velocity', velocity.x)
  return {
    x: coords.x + velocity.x,
    y: coords.y + velocity.y
  }
}

function subCoords(coords, velocity) {
  return {
    x: coords.x - velocity.x,
    y: coords.y - velocity.y
  }
}

function updateCoords(coords, velocity) {
  return addCoords(coords, velocity)
}

function updateVelocity(velocity, acceleration) {
  return addCoords(velocity, acceleration)
}

function updateAcceleration(coords, centerCoords) {
  const G = 2000
  const diff = subCoords(coords, centerCoords)
  const distance = (diff.x ** 2 + diff.y ** 2) ** (3 / 2)

  return {
    x: -diff.x * G / distance,
    y: -diff.y * G / distance
  }
}

function checkCoords(coords, velocity) {
  const R = 33
  if (coords.y < R || coords.y > canvas.height - R) {
    if (coords.y < R) coords.y = R
    velocity.y = -velocity.y
  }
  if (coords.x < R || coords.x > canvas.width - R) {
    if (coords.x < R) coords.x = R
    velocity.x = -velocity.x
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  arr.forEach(star => {
    circle(star.coords.x, star.coords.y)
    star.acceleration = updateAcceleration(star.coords, { x: canvas.width / 2, y: canvas.height / 2 })
    star.coords = updateCoords(star.coords, star.velocity)
    star.velocity = updateVelocity(star.velocity, star.acceleration)
    checkCoords(star.coords, star.velocity)
  }) 
  requestAnimationFrame(render)
}
render()







