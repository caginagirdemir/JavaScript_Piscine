function reverseString(str) {
    let ret = "";
    let j = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        //console.log(str[i]);
        ret += str[i];
        j++;
    }
    console.log(ret);
    return ret;
}

reverseString("hello");