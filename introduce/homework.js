class Animals {
  _shape = '@'
  _trace = ['-', '|']
  _isTrace = true
  
  _stackAsync = []
  _promise = true
  
  
  _positionY = 0
  _positionX = 0
  _keysPosition = []

  _canvas = []
  _canvasY = 25
  _canvasX = 25

  constructor() {
    this._canvas = this._matrix(this._canvasY, this._canvasX)
    this._canvas[this._positionY][this._positionX] = this._shape
  }

  _matrix(y, x) {
    return Array(y).fill([]).map(arr => Array(x).fill(' '))
  }

  _draw(keyY, keyX) {

    for (let i = 0; i < this._canvas.length; i++) {
      // axisY
      for (let j = 0; j < this._canvas[i].length; j++) {
        // axisX
        if (i < keyY && j === keyX) {
          this._canvas[i][j] = this._trace[1]
        }
        if (i < keyX && j === keyY) {
          this._canvas[i][j] = this._trace[0]
        }
        if (i === keyY && j === keyX) {
          this._canvas[i][j] = this._shape
        }
      }
    }
    return this._canvas

  }

  async forward(axisY) {
    
    if (axisY < 0) throw new Error('For forward use positive number.')
    this._positionY += axisY
    if (this._positionY > this._canvasY) this._positionY = this._canvasY - 1
    this.setKeyPosition(this._positionY, this._positionX)
    this._stepOnKeys()    
    
  }

  backward(axisY) {
    if (axisY > 0) throw new Error('For backward use negative number.')
    this._positionY += axisY
    if (this._positionY < 0) this._positionY = 0
    this.setKeyPosition(this._positionY, this._positionX)
    this._stepOnKeys()
  }

  left(axisX) {
    if (axisX < 0) throw new Error('For left use positive number.')
    this._positionX += axisX
    if (this._positionX > this._canvasX) this._positionX = this._canvasX - 1
    this.setKeyPosition(this._positionY, this._positionX)
    this._stepOnKeys()
  }

  right(axisX) {
    if (axisX > 0) throw new Error('For right use negative number.')
    this._positionX += axisX
    if (this._positionX < 0) this._positionX = 0
    this.setKeyPosition(this._positionY, this._positionX)
    this._stepOnKeys()
  }

  goto(posY, posX) {
    this._positionY = this._checkOutputOfArray(posY)
    this._positionX = this._checkOutputOfArray(posX)
    this._canvas[this._positionY][this._positionX] = this._shape
    this._stepOnKeys()
  }

  async callStackAsync() {
    for(let fn of this._stackAsync) {
      await fn
    }
  }
  async _stepOnKeys() {
    // console.log(this._keysPosition[0])
    let counter = 0
    for (let [keyY, keyX] of this._keysPosition) {
      const canvas = await this._draw(keyY, keyX)
      console.log('iterate', counter++, canvas)
    }


  }

  setKeyPosition(Y, X) {
    this._keysPosition.push([Y, X])
  }


  _checkOutputOfArray(axis) {
    if (axis > this._canvasY) {
      return this._canvasY - 1
    } else if (axis < 0) {
      return 0
    } else {
      return axis === 0 ? 0 : axis - 1
    }
  }

  get shape() {
    return this._shape
  }

  set shape(value) {
    if (/[#@]/g.test(value)) {
      this._shape = value
    } else {
      throw new Error('it\'s is a not dog or turtle')
    }
  }
}

const dog = new Animals
// dog.goto(5, 4)
dog.forward(5)
dog.forward(1)
// dog.backward(-100)
// dog.left(10)
// dog.right(-100)