const removeFromArray = function() {
    let args = [...arguments];
    let sourceArray = args[0];
    let newArray = [];
    let remainingArgs = args.slice(1);

    for (let i = 0, n = sourceArray.length; i < n; i++) {
        if (!remainingArgs.includes(sourceArray[i])) {
            newArray.push(sourceArray[i]);
        }
    }

    return newArray;

}

module.exports = removeFromArray
