const array = [1]
let k = 1
const getSumOfSequence = (number) => {
    for(let i = 1;i <= number; i++) {
        array.push(i)
        k++
    }
}
getSumOfSequence(7)
console.log(array, "1 +", k)