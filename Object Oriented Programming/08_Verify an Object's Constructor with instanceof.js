function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
console.log(myHouse instanceof House); //return true, false