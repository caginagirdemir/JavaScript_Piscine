function repeatStringNumTimes(str, num) {
    let sum = "";

    for (let i = 0; i < num; i++) {
        sum += str;
    }
    return sum;
}

repeatStringNumTimes("abc", 3);