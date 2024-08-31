const clientsEstimations = []
let Evaluation = 0
function askClientToGiveEstimation() {
    Evaluation = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`)) 
    if(Evaluation < 11 && Evaluation > 0){
    clientsEstimations.push(Evaluation)
    }
}
for(let i = 0; i < 5;i++) {
    askClientToGiveEstimation()
}
const goodRating = clientsEstimations.filter(good => good > 5)
const badRating = clientsEstimations.filter(bad => bad <= 5)
const result = `Всего положительных оценок: ${goodRating.length} Всего отрицательных оценок: ${badRating.length}`
alert(result)
