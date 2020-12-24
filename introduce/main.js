// каскадное присваивание
// cascading assignment
let a = q = c = 0
console.log('simple Method one', a, q, c)
let v = 1, b = 2, n = 3
console.log('simple method two', v,b,n)    
// что то подобное до кортежа в питон 
// это деструктуризация где каждому значению я присваиваю свою переменную
let [g, h, j] = [4, 5, 6]
console.log('destructuring variables from arr', g,h,j)


// поменять местами переменную

// method first
let w = 'H'
let e = 'E'
let temp = w
w = e
e = temp 
console.log('change values in variable method first',w, e)
// method second

let t = 'L'
let y = 'O'
y = [t, t = y][0]
// [t, y] = [y, b]
console.log(t, y)

// console.log(10 % 3)





