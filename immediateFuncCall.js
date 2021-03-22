// this program shows that a function can be called right away, used in event listeners
// this is called Immediately Invoked Funciotn Expression(IIFE)
let mySchool = (function(){
    let name = "CU Denver";
    let area = "Greater Denver";
    return `The college is ${name} in ${area}.`

}()); // () is to tell the browser for immediate function call.
console.log(mySchool);
