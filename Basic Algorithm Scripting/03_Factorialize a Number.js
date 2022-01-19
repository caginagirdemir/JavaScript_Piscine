function factorialize(num) {
    let ret = 1;
    for (let i = 1; i <= num; i++) {
        //console.log(i);
        ret *= i;
    }
    //console.log(ret);
    return ret;
}
factorialize(5);