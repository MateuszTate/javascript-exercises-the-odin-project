const sumAll = function(firstNumber, secondNumber) {
    if(typeof firstNumber != 'number' || typeof secondNumber != 'number' || firstNumber < 0 || secondNumber < 0){
        return 'ERROR';
    }
    let result = 0;
    let beginning = firstNumber;
    let end = secondNumber;
    if(beginning>end){
        beginning = secondNumber;
        end = firstNumber;
    }
    for(beginning; beginning<=end; beginning++){
        result+=beginning;
    }
    return result;
};

console.log(sumAll(123,1));

// Do not edit below this line
module.exports = sumAll;
