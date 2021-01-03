// O(n)

function sieveErathosphen(number) {
  const arr = Array(number).fill(true)
  for(let i = 2; i < Math.ceil(Math.sqrt(number)); i++) {
    if (arr[i]) {
      for(let j = i * i; j < number; j += i) {
        arr[j] = false
      }
    }
  }

  for(let i = 0; i < number; i++) {
    console.log(arr[i] ? 'простое ' + i : 'сложное ' + i)
  }
}

function sieveErathosphen2(number) {
  const arr = Array(number).fill(true)
  arr[0] = arr[1] = false
  for(let i = 0; i < Math.ceil(Math.sqrt(number)); i++) {
    if (arr[i]) {
      for(let j = i * 2; j < number; j += i) {
        arr[j] = false
      }
    }
  }

  for(let i = 0; i < number; i++) {
    console.log(arr[i] ? 'простое ' + i : 'сложное ' + i)
  }
}



// sieveErathosphen(1000)
sieveErathosphen2(1000)