const string = 'abc cdx ctx'
const a = string.split(' ')
const b = []

for (let i = a.length - 1, j = 0; i >= 0; i--, j++) {
  b[j] = a[i]
}

let c = 1
let d = c
d++
console.log(d)

// O(n) 
function linearSearch(arr, diapazon, searchValue) {
  if (diapazon > arr.length) diapazon = arr.length

  for (let i = 0; i < diapazon; i++) {
    if (arr[i] === searchValue) return i
  }
}



function test_linearSearch() {
  const str = 'abc cdx ctx tyr tui opi wer ter poi love'
  let count = 0  
  
    if (!linearSearch(str.split(' '), 12, 'ty')) {
      console.log('test- Ok')
      count++
    }
  
    if (!linearSearch(str.split(' '), 8, 'love')) {
      count++
      console.log('test - OK')
    }
    if (linearSearch(str.split(' '), 12, 'love')) {
      count++
      console.log('test - OK')
    }
    if (linearSearch(str.split(' '), 10, 'love')){
      count++
      console.log('test- Ok')
    } 
    if (count !== 4) console.log('test - fail')

}
test_linearSearch()


