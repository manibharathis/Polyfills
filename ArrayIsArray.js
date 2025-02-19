Array.customArray = function(input){
    return Object.prototype.toString.call(input) === '[object Array]'
}

//isArray
console.log('Array.isArray([])', Array.isArray([])); //true
console.log('Array.isArray({})', Array.isArray({})); //false

//customArray
console.log('Array.customArray([])', Array.customArray([])); //true
console.log('Array.customArray({})', Array.customArray({})); //false