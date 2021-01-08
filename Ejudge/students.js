const arr = [
  {
    id: 0,
    result: [0, 1, 2]
  },
  {
    id: 1,
    result: [13, 2, 1]
  },
  {
    id: 2,
    result: [6, 1, 2]
  }
]


function students(arrStudents) {
  const comparator = (acc, num) => acc += num
  arrStudents.forEach((obj) => obj.sumResult = obj.result.reduce(comparator, 0))
  arrStudents.sort((a, b) => b.sumResult - a.sumResult)
  arrStudents.forEach((obj) => delete obj.sumResult)
  return arrStudents
}

console.log(students(arr))

