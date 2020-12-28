function intercalaryYear(year) {
  return !((year % 4 && !(year % 100)) || year % 400)
}

console.log(intercalaryYear(1))
console.log(intercalaryYear(2000))
console.log(intercalaryYear(1600))
