const SIZE = 30

const createArray = (s) => new Array(s).fill(null)

console.log(`Creating [${SIZE ** 5}] elements!`)

console.time('VECTOR CREATION')
const vector = new Vector(SIZE, SIZE, SIZE, SIZE, SIZE)
console.timeEnd('VECTOR CREATION')

console.time('ARRAY CREATION')
const array = createArray(SIZE)
  .map(_ => createArray(SIZE)
    .map(_ => createArray(SIZE)
      .map(_ => createArray(SIZE)
        .map(_ => createArray(SIZE)))))
console.timeEnd('ARRAY CREATION')

console.time('VECTOR SET')
vector.set('hello', 1, 0, 0, 0, 4)
console.timeEnd('VECTOR SET')

console.time('ARRAY SET')
array[1][0][0][0][4] = 'hello'
console.timeEnd('ARRAY SET')

let a = '', b = ''

console.time('VECTOR GET')
a = vector.get(1, 0, 0, 0, 4)
console.timeEnd('VECTOR GET')

console.time('ARRAY GET')
b = array[1][0][0][0][4]
console.timeEnd('ARRAY GET')

console.log(a, b)
