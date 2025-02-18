// ACTUAL CODE STARTS
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
  
      // ex: [1, 2, 3]
      var inputArr = Object(this);
  
      //ex: 3 is the length of the array in Number format
      var inputArrLength = Number(inputArr.length) || 0;
  
      //if array length is 0
      if (inputArrLength === 0) {
        return false;
      }
  
      // this pipe is bitwise OR, handles lot of edge scenarios, provided few examples at the bottom
      // var newIndex = fromIndex | 0;
  
      var newIndex = Math.floor(fromIndex) || 0;
  
      //if index is -100, due to Math.max we will consider it to 0
      var finalIndex = Math.max(
        newIndex >= 0 ? newIndex : inputArrLength - Math.abs(newIndex),
        0
      );
  
      // ex: 0 < 3
      while (finalIndex < inputArrLength) {
        if (
          typeof searchElement === 'number' &&
          isNaN(searchElement) &&
          isNaN(inputArr[finalIndex])
        ) {
          return true; // Both are NaN
        }
        if (inputArr[finalIndex] === searchElement) {
          return true; // Direct comparison
        }
        finalIndex++; // Important: Increment the index to avoid an infinite loop
      }
  
      //outside the while loop
      return false;
    };
  }
  
  //All examples are passed for the above code:
  console.log([1, 2, 3].customIncludes(2)); // true;
  console.log([1, 2, 3].customIncludes(4)); // false;
  console.log([1, 2, 3].customIncludes(3, 3)); // false;
  console.log([1, 2, 3].customIncludes(3, -1)); // true;
  console.log([1, 2, NaN].customIncludes(NaN)); // true
  console.log(['1', '2', '3'].customIncludes(3)); // false
  console.log('----------------------------------------');
  const arr = ['a', 'b', 'c'];
  console.log(arr.customIncludes('c', 3)); // false
  console.log(arr.customIncludes('c', 100)); // false
  console.log('----------------------------------------');
  console.log(arr.customIncludes('a', -100)); // true
  console.log(arr.customIncludes('b', -100)); // true
  console.log(arr.customIncludes('c', -100)); // true
  console.log(arr.customIncludes('a', -2)); // false
  console.log('----------------------------------------');
  console.log([1, , 3].customIncludes(undefined)); // true
  console.log('----------------------------------------');
  const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 1, // ignored by includes() since length is 3
  };
  console.log(Array.prototype.customIncludes.call(arrayLike, 2));
  // true
  console.log(Array.prototype.customIncludes.call(arrayLike, 1));
  // false