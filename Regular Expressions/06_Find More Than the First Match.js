let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle|twinkleStar/gi; // Change this line
let result = twinkleStar.match(starRegex);
console.log(result);