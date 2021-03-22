/*
This program returns an output in the form of an array 
*/
function returnArray(length, width, height){
    let area = length * width;
    let volume = length * width * height;
    let calc = [area, volume];
    return calc;
}
console.log(returnArray(2, 3, 6));
let arrayLooks = returnArray(1, 2, 3);
console.log(arrayLooks);