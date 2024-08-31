let correctAnswers = 0
let incorrectAnswers = 0
let quest1 = prompt(`Сколько будет 2 + 2?`)
if(quest1 == '4'){
    alert(`Ответ верный!`)
    ++correctAnswers
}
else {
    alert(`Ответ неверный!`)
    ++incorrectAnswers
}
let quest2 = prompt(`Сколько будет 2 * 2?`)
if(quest2 == '4'){
    alert(`Ответ верный!`)
    ++correctAnswers
}
else {
    alert(`Ответ неверный!`)
    ++incorrectAnswers
}
let quest3 = prompt(`У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?`)
if(quest3 == '1'){
    alert(`Ответ верный!`)
    ++correctAnswers
}
else {
    alert(`Ответ неверный!`)
    ++incorrectAnswers
}
let quest4 = prompt(`У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?`)
if(quest4 == '12'){
    alert(`Ответ верный!`)
    ++correctAnswers
}
else {
    alert(`Ответ неверный!`)
    ++incorrectAnswers
}
let quest5 = prompt(`Сколько будет 2 + 2 * 2?`)
if(quest5 == '6'){
    alert(`Ответ верный!`)
    ++correctAnswers
}
else {
    alert(`Ответ неверный!`)
    ++incorrectAnswers
}
alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`)