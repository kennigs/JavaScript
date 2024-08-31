const addDays = (days)=> {
    days = days * 86400000
    let added = new Date(Date.now() + days)
    return added
}
console.log(addDays(6))