const repeatString = function(string, repeatCount) {
    let result = string;

    if (repeatCount < 0) {
        return 'ERROR';
    } else if (repeatCount == 0) {
        return '';
    }

    for (let i = 1; i < repeatCount; i++) {
        result += string;
    }

    return result;
}

module.exports = repeatString
