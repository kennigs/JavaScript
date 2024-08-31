const giveJobToStudent = (student, jobName) => {
    console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
    return (student.job = jobName,student)
}
const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
  const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
  /*
  updatedStudent = {
      fullName: 'Максим',
      experienceInMonths: 12,
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      job: 'веб-разработчик',
  }
  */