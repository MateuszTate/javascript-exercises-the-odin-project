const reverseString = function(str) {
    let result = [];
    str = str.split(' ');
    for(element of str){
        element = [...element];
        element = element.reverse('').join('');
        result.push(element);
    }
    return result.reverse().join(' ');
};

// console.log(reverseString('123! abc!'));

// Do not edit below this line
module.exports = reverseString;
