const removeFromArray = function(array1, ...args) {

    for(let i=0; i<args.length; i++){
        for(let j=0; j<array1.length;j++){
            if(array1[j]===args[i]){
                
                let x = delete array1[j];
            }
        }
    }
    return array1.filter(n=>n);


};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
