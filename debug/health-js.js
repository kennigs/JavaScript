let health = prompt('Введите число параметра "здоровье" для персонажа')
health = Number(health)
debugger
if (health) {
  health <= 0 || !health
  alert('Параметр "здоровье" должен быть больше нуля!')
  debugger
} else {
  alert(`Параметр "здоровье" равен ${health}`)
  debugger
}