const coffees = ['Latte', 'Cappucino','Americano']
const coffeeName = prompt(`Поиск кофе по названию`).toLowerCase()
const matchNamesCoffee = coffees.findIndex(coffee =>
  coffee.toLowerCase() === coffeeName.toLowerCase()
)
let popularity = matchNamesCoffee + 1
const msg = matchNamesCoffee === -1
? alert(`К сожалению такого кофе нет в наличии`)
: alert(`Держите ваш ${coffees[matchNamesCoffee]}. Он ${popularity}-й по популярности в нашей кофейне`)