function powString(string, powOrSqrt) {
  let pow = +powOrSqrt
  if (pow > 0) return string.padEnd(string.length * pow, string)
  if (pow < 0) {
      const root = string.length / -pow
      const strArr = string.match(new RegExp(`.{${root}}`, 'g'))
      const flag = strArr && strArr.every(str => strArr[0] === str)
      
      if (!strArr || !flag) return 'NO SOLUTION'
      if (flag) return string.substring(0, string.length / -pow)
  }

}



console.log(powString('abaaba', '-2'))

