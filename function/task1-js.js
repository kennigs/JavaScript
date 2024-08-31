function getName1(name) {
    return `Имя равно ${name}`
}
const showName1 = getName1('Даша')
console.log(showName1)
const getName2 = function(name) {
    return `Имя равно ${name}`
}
const showName2 = getName2('Андрей')
console.log(showName2)
const getName3 = name => {
    return `Имя равно ${name}`
}
const showName3 = getName3('Киррил')
console.log(showName3)
