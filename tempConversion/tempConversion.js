const ftoc = function(temp) {
  let convertedTemp = (temp - 32) * (5/9);
  if (convertedTemp != 0) {
    convertedTemp = convertedTemp.toFixed(1);
  }
  return Number(convertedTemp);
}

const ctof = function(temp) {
  let convertedTemp = (temp * 9 / 5) + 32;

  if (convertedTemp != 0) {
    convertedTemp = convertedTemp.toFixed(1);
  }
  return Number(convertedTemp);
}

module.exports = {
  ftoc,
  ctof
}
