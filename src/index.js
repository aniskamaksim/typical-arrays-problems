exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
        let sortedArray = array.sort((a, b) => {
            return a - b;
        });
        return sortedArray[0];
    }
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
        let sortedArray = array.sort((a, b) => {
            return b - a;
        });
        return sortedArray[0];
    }
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
        let summArray = array.reduce((a, b) => {
            return a + b;
        });
        let avgResult = summArray / array.length;
        return avgResult;
    }
}
