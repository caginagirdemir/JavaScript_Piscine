// Setup
function testEqual(val) {
    if (val == 12) { //it compare just content without type
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);