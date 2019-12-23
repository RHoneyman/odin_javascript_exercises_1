const leapYears = function(year) {

    // if year is divisible by 100, it must be divisible by 400 to be a leap year.
    // otherwise if year is divisible by 4, it is a leap year.
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }

}

module.exports = leapYears
