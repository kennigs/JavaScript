const getDaysBeforeBirthday = (nextBirthdayDate)=> {  
    const res = Math.round(Math.round(nextBirthdayDate.getTime() - new Date())/ 1000 / 3600 / 24)
    return res
}
console.log(getDaysBeforeBirthday(new Date('November 2, 2024')))