function getDaysBeforeBirthday(nextBirthdayDate) {
    return Math.round((nextBirthdayDate - new Date()) / 1000 / 3600 / 24);
  }
  console.log(getDaysBeforeBirthday(2025, 2, 2))