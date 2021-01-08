function suitabilityOfTheСircle(x, y, r) {
  return Math.abs(x) <= r && Math.abs(y) <= r && r > 0 ? 'Yes' : 'No'
}


// 1
// -1
// -1
// 1


function test() {
  const arr = [ { x: 0, y: 0, r: 1 }, { x:-1, y: 3, r: 1 }, { x:-1, y: -2, r: 1 }, { x:2, y: 2, r: 1 } ]

  const answer = arr.map((obj, i) => ({
    answer: suitabilityOfTheСircle(obj.x, obj.y, obj.r),
    test: '#test ' + i
  }))
  console.log(answer)
} 

test()


