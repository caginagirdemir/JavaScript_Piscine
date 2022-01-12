// Setup
function testStrict(val) {
    if (val === 7) { //it compare content and type, you cannot get "Equal" in case val = '7' 
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);