const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = document.body.clientWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight
  canvas.width = document.body.clientWidth
})

let velocity = {
  x: 5,
  y: 5
}

let acceleration = {
  x: 0.1,
  y: 0.1
}

let coords = {
 x: 100, 
 y: 100 
}


function circle(x, y) {
  ctx.fillStyle = 'red'
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(x, y, 30, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
}


function addCoords(coords, velocity) { 
  return {
    x: coords.x += velocity.x,
    y: coords.y += velocity.y
  }
}

function subCoords(coords, velocity) { 
  return {
    x: coords.x -= velocity.x,
    y: coords.y -= velocity.y
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
  const distance = (diff.x ** 2 + diff.y ** 2) ** (3/2)
  return {
    x: -diff.x * G / distance,
    y: -diff.y * G / distance
  }
}
function checkCoords(coords, velocity) {
  if (coords.y < 0 || coords.y >= canvas.height) {
    if (coords.y < 0) {
      coords.y = 10
      return
    }  
    velocity.y = -velocity.y
  }
  if (coords.x < 0 || coords.x >= canvas.width) {
    if (coords.x < 0) {
      coords.x = 10
      return
    }
    velocity.x = -velocity.x
  }
} 
let center = { x: canvas.width / 2, y: canvas.height / 2 }
setInterval(() => {

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  coords = updateCoords(coords, velocity)
  circle(coords.x, coords.y)
  
  // acceleration = updateAcceleration(coords, center)
  
  velocity = updateVelocity(velocity, acceleration)


  checkCoords(coords, velocity)
  
  
  
}, 10)  
  

  



