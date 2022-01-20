function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      num--;
    }
    console.log(newArr);
    return newArr;
  }
  
  console.log(copyMachine([true, false, true],3 ));