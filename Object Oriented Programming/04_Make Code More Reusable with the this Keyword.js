let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; } //doesn't matter function name as long as property name doesn't change
};


console.log(dog.sayLegs());