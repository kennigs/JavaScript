const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]
// data-task-id
const data = document.querySelector(`[data-task-id='1']`)
let dd = []
tasks.forEach(id => dd.push(id.id))
data.setAttribute(`data-task-id`, dd[0])
console.log(data.getAttribute(`data-task-id`))
// id
const id = document.querySelector(`input`)
id.setAttribute(`id`, dd[1])
console.log(id.getAttribute(`id`))
// for
const labels = document.querySelector('label')
const forr = labels.htmlFor = dd[2]
console.log(forr)
// text on span
let vv = []
tasks.forEach(text => vv.push(text.text))
const span = document.querySelector('span')
span.textContent = vv
console.log(span.textContent)