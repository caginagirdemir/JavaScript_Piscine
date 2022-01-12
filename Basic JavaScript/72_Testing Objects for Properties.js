function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) { //it checks whether exist checkProp in obj 
        return obj[checkProp];
    }
    return "Not Found";
}