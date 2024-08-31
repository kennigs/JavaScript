const dog = {
    name: `Чарли`,
    type: `Собака`,
    makeSound() {
        return `Гав-Гав`
    }
}
const bird = {
    name: `Петя`,
    type: `Воробей`,
    makeSound() {
        return 'Чик-чирик'
     }
}
function makeDomestic(isDomestic = false) {
    alert(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    if(isDomestic === true) {
        return this.isDomestic = true
    }
    else {
        return this.isDomestic = false
    }
 }
const doggie = makeDomestic.bind(dog, true)()
console.log('dog: ', dog)
makeDomestic.call(bird, false)
console.log('bird: ', bird)
makeDomestic.apply(bird, [true] )
console.log('bird: ', bird)