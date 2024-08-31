for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
  }
  let o = 0
  while (o < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    ++o
  }
  let p = 0
  do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    ++p
  } while (p < 3)