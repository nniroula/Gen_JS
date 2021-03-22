// this program creates an object and accesses its content using dot and square bracket notation.
let obj = {
    name: "Nabin",
    lastName: "Niroula",
    grade: "graduate",
    college: "CU Denver",
    funcUse: function(){
        return `${this.name} ${this.lastName}`
    },
    arr: ['GPA', 4.0, "Software Engineering"],
    33: "age"
}; 
console.log(obj.funcUse); // see what this does
console.log(obj.funcUse()); // see what this does, you must use () bcoz funcUse is a function 
let obj1 = obj.funcUse();
console.log(obj1);

// access array defined in an object
console.log(obj.arr); // see what this does, this returns whole array
console.log(obj.arr[0]); // this returns first element in an array

// access a property that has a number as its key
    //obj.33; // this gives an error
console.log(obj[33]); // this returns "age"

// to return values of an object, use bracket notation.
console.log(obj.name); // this returns Nabin
//console.log(obj[name]); // this gives an error, becuse key is always string in a JS object
console.log(obj["name"]);