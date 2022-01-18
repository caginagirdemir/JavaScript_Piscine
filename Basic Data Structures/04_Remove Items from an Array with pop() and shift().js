function popShift(arr) {
    let popped = arr.pop(); // delete at the end
    let shifted = arr.shift(); // delete at the front
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));