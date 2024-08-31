// number
let age = 18
console.log(typeof String(age),'|',String(age))
// string
let name = 'andrew'
console.log(typeof Boolean(name),'|',Boolean(name))
// boolean
let isThisFalse = false
console.log(typeof String(isThisFalse),'|',String(isThisFalse))
// null
let ok = null
console.log(typeof String(ok),'|',String(ok))
// undefined
let test
console.log(typeof String(test),'|',String(test))
// object
const friend = {
    age: 18,
    name: 'andrew'
}
console.log(typeof Boolean(friend),'|',Boolean(friend))
// symbol
let symvol = Symbol()
console.log(typeof Boolean(symvol),'|',Boolean(symvol))
// bigint
let high = 2009483537n
console.log(typeof String(high),'|',String(high))