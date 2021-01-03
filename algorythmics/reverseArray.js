function reverseArray(arr) {
  for (let i = arr.length - 1, j = 0; i > 0; i--, j++) {
    arr[i] = [arr[j], arr[j] = arr[i]][0]
  }
}

function test_reverseArray() {
  const arr = [1, 2, 3]
  reverseArray(arr)
  let count = 0
  
  if (arr[0] === 3) count++
  if (arr[1] === 2) count++
  if (arr[2] === 1) count++
  count === 3 ? console.log('test1 - Ok') : console.log('test1 - Fail')
}

test_reverseArray()