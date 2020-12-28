function maxConsistentLength(string) {
  const arr = string.split(/\n/).map(Number)
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) return max
    if (max < arr[i]) max = arr[i]
  }
}



console.log(maxConsistentLength('1\n21\n9\n0'))