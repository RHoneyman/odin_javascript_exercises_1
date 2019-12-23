const sumAll = function(x, y) {
    if (typeof x != "number" || typeof y != "number") {
        return "ERROR";
    } else if (x < 0 || y < 0) {
        return "ERROR";
    }
    
    let larger = x > y ? x : y;
    let smaller = x < y ? x : y;
    let sum = 0;

    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }

    return sum;


}

module.exports = sumAll
