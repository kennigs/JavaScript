const temperatureInCelsius = prompt('Введите температуру по цельсию для замерзания воды в нормальных условиях');
debugger

if (temperatureInCelsius === '0') {
   alert('0 градусов по Цельсию - это температура замерзания воды')
   debugger
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
   debugger
}

let converter = prompt('Введите температуру по Цельсию чтобы перевести её в Фаренгейт')
converter = Number(converter)
const temperatureInFahrenheit = (converter) * 9 / 5 + 32;
debugger
alert(`${converter} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
debugger