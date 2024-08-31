// 1-ый способ(for)
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for(let i = 0;i < numbers.length; i++) {
    sum += numbers[i] ** 3
} 
console.log('for',sum)
// 2-ой способ(for...of)
let sumka = 0 
for(let number of numbers) {
    sumka += number ** 3
}
console.log('for...of', sumka)
// 3-ий способ(forEach)
let summa = 0
numbers.forEach(number => {
    summa += number ** 3 
})
console.log('forEach',summa)
// 4-ый способ(reduce())
const mus = numbers.reduce(function(acc,number) {
    return acc += number ** 3
}, 0)
console.log('reduce', mus)