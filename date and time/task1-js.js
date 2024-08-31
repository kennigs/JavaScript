function check(x) {
    if(x > 9) {
        return x
    }
    else {
        return '0' + x
    }
}
const getDateFormat = (date, separator = '.') => 
    check(date.getDate()) + separator +
    check(date.getMonth() + 1) + separator +
    date.getFullYear()   
let a = new Date()
console.log(getDateFormat(a))