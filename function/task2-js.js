const getSumOfNumbers = function(number, type = 'odd')  
    {if (typeof number !== 'number' || isNaN(number)) {
        return NaN;
    }
    let res = 0
    for(let i = 0; i <= number; i++) {
        if(type === 'even' && i % 2 === 0) {
            res +=i
        }
        else if(type === 'odd' && i % 2 !== 0) {
            res += i
        }
        else if (type !== "even" && type !== "odd") {
            res += i;
        }
    }
    return res
    }
    console.log(getSumOfNumbers(10, "odd")); // 25
    console.log(getSumOfNumbers(10, "even")); // 30
    console.log(getSumOfNumbers(10, "")); // 55