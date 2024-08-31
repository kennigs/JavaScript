console.log('Andrew is my friend')
// 1.String
const name = 'Andrew'
console.log('His name is',name,'|', typeof name )
// 2.Number
const age = 15
console.log('His age is', age,'|', typeof age)
// 3.Boolean
const isHeGood = false
console.log('Is he good? I think that', isHeGood, '|', typeof isHeGood)
// 4.Undefined
const collage = undefined
console.log('what college will he go to?', collage, '|', typeof collage)
// 5.Null

// 6.Object
const info = {
    name: 'Andrew',
    age: 15,
    isHeGood: false
}
console.log('Information about my friend', info, '|', typeof info)
// 7.Symbol
let sym1 = Symbol()
console.log('Is this symbol','|', typeof sym1)
// 8.BigInt
const googol = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
console.log('The largest number I know is googol, here is its spelling - ', googol, '|', typeof googol)    
