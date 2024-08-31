const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
const halfText = javaScriptDescription.length / 2
let arr = javaScriptDescription.slice(0, 139).repeat(3)
let array= arr.replaceAll('a', 'A').replaceAll('а', 'А').replaceAll(' ', '')
// const index = javaScriptDescription.indexOf(Являетс)
console.log(array)