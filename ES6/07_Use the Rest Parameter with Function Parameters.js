const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(2, 2, 2));
console.log(sum(2, 2, 2, 2)); //no matter argument count