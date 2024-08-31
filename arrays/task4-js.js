const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map (function(number)  {
    return number = number * 1.5
})
const notification = coffees.forEach (function(coffee,index) {
    alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`)
})