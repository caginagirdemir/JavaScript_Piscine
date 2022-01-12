// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5; //no need return because sum variable already defined.
    //return value is undefined.
}

addThree();
addFive();