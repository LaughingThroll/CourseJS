const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
// ctx.translate(canvas.width / 2, 0)


canvas.addEventListener('resize', () => {
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
})

function drawCircle(x, y) {
  ctx.fillStyle = 'red'
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(x, y, 30, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
}

function drawRope(x, y, sinX, cosY) {
  ctx.lineWidth = 5
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(sinX, cosY)
  ctx.stroke()
  ctx.fill()
}

//  T - period fluctuasion
//  l - length
//  g - acceleration free fall = G * (M / r^2)
// G - science CONSTANT
// M - weigth Object 
// r - radius Object
//  g = 9.8 m/s^2 from WIKI
//  T = 2 * Math.PI * Math.sqrt(l / g)
let T = 0 // частота колебаний 
let fps = 1 / 60 // частота кадров 
let g = 1500 // ускорения свободного положения
let initDeegres = Math.PI *1.5 // угловое отклонение 
let length = 220   //  Длинна маятника

const pundulum = {
  deegres: initDeegres,
  tangensAcceleration: 0,
  doubleW: 0
}


function update() {
  pundulum.tangensAcceleration = -(g / length) * Math.sin(pundulum.deegres),
  pundulum.doubleW += pundulum.tangensAcceleration * fps
  pundulum.deegres += pundulum.doubleW * fps
  T += fps
    
}

const DISTANCE_X = 600
const DISTANCE_Y = 300
function render() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  drawRope(DISTANCE_X, DISTANCE_Y, Math.sin(pundulum.deegres) * length + DISTANCE_X, Math.cos(pundulum.deegres) * length + DISTANCE_Y)
  drawCircle(Math.sin(pundulum.deegres) * length + DISTANCE_X, Math.cos(pundulum.deegres) * length + DISTANCE_Y)
  update()
  
  requestAnimationFrame(render)
}
render()