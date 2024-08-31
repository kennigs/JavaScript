const myName = 'Вадим'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен Минин'
const reasonText = 'Мне нравится писать код'
const numberOfMonth = '0'
let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`
console.log(myInfoText.replaceAll('JavaScript', 'javascript').replaceAll('курс', 'КУРС'),'|',myInfoText.length,'|',myInfoText[0],myInfoText[279])
let userName = prompt('Введите ваше имя').trim().toUpperCase()
let userAge = prompt('Сколько вам лет?').trim()
alert(`Вас зовут,  ${userName} и вам ${Number(userAge)} лет`)
let userString = prompt('Введите текст для обрезки').trim()
let startSliceIndex = prompt("Введите индекс, с которого нужно начать обрезку строки")
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`)
let userText = prompt('Введите текст').trim()
let wordFromText = prompt('Введите слово из текста').trim()
let indexOfWord = wordFromText.indexOf()
let string = userString.slice(0,wordFromText.indexOf())
alert(`Результат: ${string}`)