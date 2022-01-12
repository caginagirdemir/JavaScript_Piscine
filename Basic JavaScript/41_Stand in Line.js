function nextInLine(arr, item) {
    arr.push(item); // push to array new item
    var removed = arr.shift(); //remove first item and get first item which removed to variable.
    return removed; //return first item which deleted.
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));