function mixedNumbers(arr) {
    arr.unshift("I", 2, "three"); //add at the front
    arr.push(7, "VIII", 9) //add at the end
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));