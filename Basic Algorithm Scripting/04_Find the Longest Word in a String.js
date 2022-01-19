function get_max(arr) {
    let i = 0;
    let max_value = 0;
    while (i < arr.length) {

        if (max_value < arr[i]) {
            max_value = arr[i];
        }
        i++;
    }
    return max_value;
}

function findLongestWordLength(str) {
    let i = 0;
    let counter = 0;
    let long_w = [];

    while (i < str.length) {
        if (str[i] == ' ' || i + 1 == str.length) {


            if (i + 1 == str.length) {
                long_w.push(i - (counter + 1) + 1);
            } else {
                long_w.push(i - (counter + 1));
            }
            counter = i;
        }
        i++;

    }
    console.log(long_w);
    return get_max(long_w);
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");