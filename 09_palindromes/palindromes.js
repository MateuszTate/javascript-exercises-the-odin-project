const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('');
    return str.join('') === str.reverse().join('');
};

// console.log(palindromes('A car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;
