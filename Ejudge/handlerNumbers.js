function handlerNumbers(string) {
  const arr = string.split('')
  arr.pop()
  
  let middleNumber = 0
  let maxNumber = +arr[0]
  let minNumber = +arr[0]
  let sumMod = 0
  let mod = 3

  for(let i = 0; i <= arr.length; i++) {
    middleNumber += isNaN(+arr[i]) ? 0 : +arr[i]
    if (maxNumber < arr[i]) maxNumber = +arr[i]
    if (minNumber > arr[i]) minNumber = +arr[i]
    if (i % mod === 0 && i !== 0) {
      sumMod += (+arr[i - 1] + +arr[i - 2] + +arr[i - 3]) % mod
      mod += 3
    }
  }

  return {
    middle: middleNumber / arr.length,
    maxNumber, 
    minNumber,
    sumMod
  }
  
}



console.log(handlerNumbers('123456#'))

