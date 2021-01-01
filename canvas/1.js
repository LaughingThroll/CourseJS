const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = document.body.clientWidth
canvas.height = window.innerHeight

function square(x, y, width, height, fill = 'black', strokeColor = 'black', strokeWidth = 5) {
  ctx.fillStyle = fill
  ctx.fillRect(x, y, width, height)
  ctx.strokeStyle = strokeColor
  ctx.strokeWidth = strokeWidth
  console.log(strokeWidth)
  ctx.strokeRect(x, y, width, height)
}


function circle(x, y, radius, fill = 'black', strokeFill = 'black', strokeWidth = 5) {
  ctx.fillStyle = fill
  ctx.strokeStyle = strokeFill
  ctx.strokeWidth = strokeWidth
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.fill()

}

function triangle(startX, startY, middleX, middleY, endX, endY, fill) {
  ctx.fillStyle = fill
  ctx.beginPath()
  ctx.moveTo(startX, startY)
  ctx.lineTo(middleX, middleY)
  ctx.lineTo(endX, endY)
  ctx.closePath()
  ctx.stroke()
  ctx.fill()
}













function cloud(x, y, count) {
  let startX = x
  let startY = y
  const diff = Math.floor(count / 2)
  for(let i = 0; i < count; i++) {
    circle(!(i % diff) ? startX = x : startX += 20, !( i % diff) ? startY += 20 : startY, 30, 'white', 'black', 5)
  }
}



function casement() {

  const x = 450
  const y = 300
  const width = height = 150
  square(x, y, width, height, 'yellow', 'black')
  ctx.beginPath()
  ctx.moveTo(x + width / 2, y)
  ctx.lineTo(x + width / 2, y + height)
  ctx.stroke()
  ctx.moveTo(x, y + height / 2)
  ctx.lineTo(x + width, y + height / 2)
  ctx.stroke()
  circle(canvas.width - 200, 100, 50, 'yellow')
  cloud(100, 50, 10)
  cloud(600, 50, 9)
  cloud(canvas.width - 300, 50, 10)
}


function christmasTree(count) {

  let startX = canvas.width - 400
  let startY = canvas.height - 500
  let middleX = canvas.width - 200
  let middleY = canvas.height - 500
  let endX = canvas.width - 300
  let endY = canvas.height - 600

  for (let i = count; i > 0; i--) {
    triangle(startX, startY += 50, middleX, middleY += 50, endX, endY += 50, 'green')
  }
  square(startX += 75, startY += 2, 40, 100, 'brown', 'black', 2)

}


function house() {
  square(canvas.width / 4, canvas.height / 3, 300, 400, 'gray', 'black')
  triangle(canvas.width / 3.97, canvas.height / 3, 678, canvas.height / 3, canvas.width / 2.85, 100, 'brown')
  casement()
}

function background() {
  ctx.fillStyle = 'blue'
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2)
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(0, canvas.height / 2)
  ctx.lineTo(canvas.width, canvas.height / 2)
  ctx.stroke()

  ctx.fillStyle = 'brown'
  ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2)
}



background()
christmasTree(3)
house()
// ctx.global
