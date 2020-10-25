module.exports = function reverse (n) {
    if(Number.isInteger(Number(n))) {
        const str = Math.abs(n).toString();
        const result = str.split('').reverse().join('');
        return result;
    }
}
