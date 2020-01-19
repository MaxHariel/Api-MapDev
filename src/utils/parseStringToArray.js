module.exports = function parseStringToArray(arrayAsStrings) {
    return arrayAsStrings.split(',').map(arrayAsString => arrayAsString.trim());
}